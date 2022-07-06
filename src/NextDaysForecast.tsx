import { DayForecast } from "./DayForecast";
import "./styles/weather.css";
import { WeatherInfoT } from "./types";

type NextDaysForecastT = {
  nextDaysForecast: WeatherInfoT[];
};

export const NextDaysForecast = (props: NextDaysForecastT) => {
  return (
    <div className="forecastWrapper">
      {props.nextDaysForecast.map((day) => {
        return <DayForecast dayWeather={day} key={day.date.getDate()} />;
      })}
    </div>
  );
};
