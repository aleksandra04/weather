import React from "react";
import { WeatherInfoT } from "./Weather";
import { iconNames } from "./iconsMap";
import { getAverageTemp, getIcon } from "./utils";
import "./styles/weather.css";

export type TodayPropsT = {
  dayWeather: WeatherInfoT;
};

export const Today = (props: TodayPropsT) => {
  const averageTemp =
    props.dayWeather &&
    getAverageTemp(
      props.dayWeather.temperature.max,
      props.dayWeather.temperature.min
    );

  return (
    props.dayWeather && (
      <div className="todayWrapper">
        <div className="todayHeader">Today</div>
        <div className="todayInfoWrapper">
          {getIcon(iconNames[props.dayWeather.weather.main], "icon")}
          <div>
            <p className="degree">{`${Math.round(averageTemp)}\u00b0`}</p>
            <p className="weatherDescription">
              {props.dayWeather.weather.main}
            </p>
          </div>
        </div>
      </div>
    )
  );
};
