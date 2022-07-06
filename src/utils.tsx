import { CityType, dailyItemT, responseT, WeatherInfoT } from "./types";

export const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getApiUrl = (cityName: string, cities: CityType[], id: string) => {
  const city = cities.find((city: CityType) => {
    return city.id === cityName;
  }) as CityType;

  return `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}4&lon=${city.lon}&exclude=hourly,minutely,alerts,current&units=metric&appid=${id}`;
};

export const processApiResponse = (data: responseT): WeatherInfoT[] => {
  return data.daily.reduce(
    (acc: WeatherInfoT[], curr: dailyItemT, index: number) => {
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
};

export const getAverageTemp = (min: number, max: number) => (max + min) / 2;

export const getIcon = (name: string, className: string): JSX.Element => {
  return (
    <span className={`material-symbols-outlined ${className}`}>{name}</span>
  );
};
