import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { cities } from "./App";
import { NextDaysForecast } from "./NextDaysForecast";
import { Today } from "./Today";
import "./styles/weather.css";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { getApiUrl, processApiResponse } from "./utils";
import { WeatherInfoT } from "./types";

const ID = "86b5e8d3f955d37aecffa96ca1c7c9bd";

interface MatchParams {
  city: string;
}
interface WeatherProps extends RouteComponentProps<MatchParams> {}

type stateT = {
  selectedCityWeather: WeatherInfoT[];
  loading: boolean;
  error: boolean;
};

class WeatherImpl extends React.Component<WeatherProps, stateT> {
  state = {
    selectedCityWeather: [],
    loading: false,
    error: false,
  };

  componentDidMount() {
    this.getForecast();
  }

  componentDidUpdate(prevProps: WeatherProps) {
    if (prevProps.match.params.city !== this.props.match.params.city) {
      this.getForecast();
    }
  }

  getForecast = () => {
    this.setState((prevState) => ({
      ...prevState,
      error: false,
    }));
    const url = getApiUrl(this.props.match.params.city, cities, ID);
    this.fetchForecast(url);
  };

  fetchForecast = async (url: string) => {
    this.setState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    try {
      const result = await fetch(url);
      const json = await result.json();
      const weatherInfo = processApiResponse(json);

      this.setState((prevState) => ({
        ...prevState,
        selectedCityWeather: weatherInfo,
      }));
    } catch (err) {
      this.setState((prevState) => ({
        ...prevState,
        error: true,
      }));
    } finally {
      this.setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    }
  };

  render() {
    const { selectedCityWeather, loading, error } = this.state;

    return (
      <main className="weatherWrapper">
        {loading && <Loader />}
        {!loading && !error && (
          <>
            <Today dayWeather={selectedCityWeather[0]} />
            <NextDaysForecast nextDaysForecast={selectedCityWeather.slice(1)} />
          </>
        )}
        {error && <Error />}
      </main>
    );
  }
}

export const Weather = withRouter(WeatherImpl as any);
