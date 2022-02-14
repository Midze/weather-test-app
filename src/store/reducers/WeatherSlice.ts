import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherResponse, WeatherByDay, City } from '../../models/Weather';

interface WeatherSlice {
  isLoading: boolean;
  error: string;
  city: City,
  weatherByDay: {
    [index: string]: WeatherByDay;
  };
}

const initialState: WeatherSlice = {
  isLoading: true,
  error: '',
  city: {
    coord: {
      lat: null,
      lon: null,
    },
    country: '',
    id: null,
    name: '',
    population: null,
    sunrise: null,
    sunset: null,
    timezone: null,
  },
  weatherByDay: {}
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    getWeatherData(state) {
      state.isLoading = true;
    },
    getWeatherDataSuccess(state, action: PayloadAction<WeatherResponse>) {
      state.city = action.payload.city;
      state.weatherByDay = action.payload.weatherByDay;
      state.isLoading = false;
      state.error ='';

    },
    getWeatherDataFail(state, action: PayloadAction<string>) {
      console.log(action);
      state.isLoading = false;
      state.error = action.payload;
    },
    clearError(state) {
      state.error = '';
    }
  },
});

export const {
  getWeatherData,
  getWeatherDataSuccess,
  getWeatherDataFail,
  clearError,
} = weatherSlice.actions;

export default weatherSlice.reducer;
