export type responseT = {
  daily: dailyItemT[];
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
};

export type dailyItemT = {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: { [key: string]: number };
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: { [key: string]: number };
  uvi: number;
  weather: weatherT[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
};

export type weatherT = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

export type CityType = {
  name: string;
  id: string;
  lat: number;
  lon: number;
};

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
