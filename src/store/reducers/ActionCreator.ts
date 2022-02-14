import { AppDispatch } from '../store';
import axios from 'axios';
import { WeatherDTO } from '../../models/Weather';
import {
  getWeatherData,
  getWeatherDataFail,
  getWeatherDataSuccess
} from './WeatherSlice';
import { weatherService } from '../../services/weatherServise';

interface ErrorWithMessage {
  message: string;
}

export const fetchWeather = (option: string) => async (dispatch: AppDispatch) => {
  try {

    dispatch(getWeatherData());

    const { data } = await axios.get<WeatherDTO>(
      `https://api.openweathermap.org/data/2.5/forecast?q=${option}&appid=${process.env.REACT_APP_API_KEY}`
    );

    const splittedData = weatherService.splitData(data);
    
    dispatch(getWeatherDataSuccess(splittedData));

  } catch (e: unknown) {
    const error = e as ErrorWithMessage;
    dispatch(getWeatherDataFail(error.message));

  }
};