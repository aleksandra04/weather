import { DayForecast } from "./DayForecast";
import { WeatherInfoT } from "./Weather";
import "./styles/weather.css";

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
