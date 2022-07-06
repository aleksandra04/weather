import { iconNames } from "./iconsMap";
import { TodayPropsT } from "./Today";
import { getAverageTemp, getIcon, weekDays } from "./utils";
import "./styles/weather.css";

export const DayForecast = (props: TodayPropsT) => {
  const day = props.dayWeather.date.getDay();
  const averageTemp =
    props.dayWeather &&
    getAverageTemp(
      props.dayWeather.temperature.max,
      props.dayWeather.temperature.min
    );
  const icon = getIcon(
    iconNames[props.dayWeather.weather.main],
    "icon icon--small"
  );
  return (
    <div className="dayForecastWrapper">
      <p className="dayForecastHeader">{weekDays[day]}</p>
      {icon}
      <p className="degree degree--small">{`${Math.round(
        averageTemp
      )}\u00b0`}</p>
    </div>
  );
};
