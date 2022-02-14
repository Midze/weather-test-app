export interface DayWeather {
  temp: number,
  feels_like: number,
  temp_min: number,
  temp_max: number,
  pressure: number,
  humidity: number,
  weather?: Weather;
}

export interface WeatherByDay {
  [index: string]: DayWeather;
}

export interface City {
  coord: {
    lat: number | null,
    lon: number | null,
  };
  country: string;
  id: number | null;
  name: string;
  population: number | null;
  sunrise: number | null;
  sunset: number | null;
  timezone: number | null;
}

export interface Weather{
  id: number,
  main: string,
  description: string,
  icon: string
}

export interface WeatherData {
  dt: number;
  dt_txt: string;
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    sea_level: number,
    grnd_level: number,
    humidity: number,
    temp_kf: number
  };
  weather: Weather[],
  clouds: {
      all: number
  },
  wind: {
      speed: number,
      deg: number,
      gust: number
  },
  visibility: number,
  pop: number,
  sys: {
      pod: string
  },
}

export interface WeatherDTO {
  city: City;
  cnt: number;
  code: string;
  list: WeatherData[];
  message: number | string;
}

export interface WeatherResponse {
  city: City;
  weatherByDay: {
    [index: string]: WeatherByDay;
  };
}