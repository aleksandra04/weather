import React from "react";
import { iconNames } from "./iconsMap";
import { getAverageTemp, getIcon } from "./utils";
import "./styles/weather.css";
import { WeatherInfoT } from "./types";

export type TodayPropsT = {
  dayWeather: WeatherInfoT;
};

export const Today = ({ dayWeather }: TodayPropsT) => {
  const averageTemp =
    dayWeather &&
    getAverageTemp(dayWeather.temperature.max, dayWeather.temperature.min);

  return (
    dayWeather && (
      <div className="todayWrapper">
        <div className="todayHeader">Today</div>
        <div className="todayInfoWrapper">
          {getIcon(iconNames[dayWeather.weather.main], "icon")}
          <div>
            <p className="degree">{`${Math.round(averageTemp)}\u00b0`}</p>
            <p className="weatherDescription">{dayWeather.weather.main}</p>
          </div>
        </div>
      </div>
    )
  );
};
