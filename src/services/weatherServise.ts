import { WeatherDTO, WeatherByDay, DayWeather } from '../models/Weather';

const KELVIN = 273.15;

const convertTemperatureToCelcium = (dayWeather: DayWeather) => {
  const {
    temp,
    feels_like,
    temp_min,
    temp_max
  } = dayWeather;

  return {
    ...dayWeather,
    temp: Math.round(temp - KELVIN),
    feels_like: Math.round(feels_like - KELVIN),
    temp_min: Math.round(temp_min - KELVIN),
    temp_max: Math.round(temp_max - KELVIN)
  };
};

const splitData = (data: WeatherDTO) => {
  const { list, city } = data;
  const weatherByDay: {
    [index: string]: WeatherByDay
  } = {};
  
  list.forEach((item) => {
    const [date, time] = item.dt_txt.split(' ');
    const shortTime = time.slice(0,-3);

    if (weatherByDay[date]) {
      weatherByDay[date][shortTime] = {
        ...convertTemperatureToCelcium(item.main),
        weather: item.weather[0],
      };
    } else {
      weatherByDay[date] = {[shortTime]: {
        ...convertTemperatureToCelcium(item.main),
        weather: item.weather[0],
      }};
    }
  });
  return {
    city,
    weatherByDay,
  };
};


export const weatherService = {
  splitData,
};