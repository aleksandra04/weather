import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { cities, CityType } from "./App";
import { NextDaysForecast } from "./NextDaysForecast";
import { Today } from "./Today";
import "./styles/weather.css";
const ID = "86b5e8d3f955d37aecffa96ca1c7c9bd";

interface MatchParams {
  city: string;
}
interface WeatherProps extends RouteComponentProps<MatchParams> {}

export type WeatherInfoT = {
  date: Date;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  };
  temperature: {
    [key: string]: number;
  };
};

class WeatherImpl extends React.Component<WeatherProps, {}> {
  state = {
    selectedCityWeather: [],
  };

  componentDidMount() {
    const url = this.getApiUrl();
    this.getForecast(url);
  }

  componentDidUpdate(prevProps: WeatherProps) {
    if (prevProps.match.params.city !== this.props.match.params.city) {
      const url = this.getApiUrl();
      this.getForecast(url);
    }
  }

  getApiUrl = () => {
    const cityName = this.props.match.params.city;
    const city = cities.find((city: CityType) => {
      return city.id === cityName;
    }) as CityType;

    return `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}4&lon=${city.lon}&exclude=hourly,minutely,alerts,current&units=metric&appid=${ID}`;
  };

  getForecast = async (url: string) => {
    try {
      const result = await fetch(url);
      const json = await result.json();
      const weatherInfo = json.daily.reduce(
        (acc: WeatherInfoT[], curr: any, index: number) => {
          index < 5 &&
            acc.push({
              date: new Date(curr.dt * 1000),
              weather: { ...curr.weather[0] },
              temperature: { ...curr.temp },
            });
          return acc;
        },
        []
      );
      this.setState(() => ({
        selectedCityWeather: weatherInfo,
      }));
    } catch (err) {
      alert("something went wrong, try again");
    }
  };

  render() {
    return (
      <main className="weatherWrapper">
        <Today dayWeather={this.state.selectedCityWeather[0]} />
        <NextDaysForecast
          nextDaysForecast={this.state.selectedCityWeather.slice(1)}
        />
      </main>
    );
  }
}

export const Weather = withRouter(WeatherImpl as any);
