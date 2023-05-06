import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeatherByCoords } from '../../common/api';
import { createSelector } from '../../common/utils';
import { CityData } from './citiesSearchSlice';

interface WeatherCard {
  city: CityData;
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
}

export type Weather = { weatherCards: WeatherCard[]; error: boolean };

const initialState: Weather = { weatherCards: [], error: false };

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchWeatherByCoords.fulfilled,
        (state: Weather, action: PayloadAction<WeatherCard>) => {
          const {
            city,
            weather,
            main: { temp },
            wind: { speed },
          } = action.payload;

          state.weatherCards.push({
            city,
            weather,
            main: { temp },
            wind: { speed },
          });
        }
      )
      .addCase(fetchWeatherByCoords.rejected, (state: Weather) => {
        state.error = true;
      });
  },
});

export const getWeather = createSelector('weather');
export const {} = weatherSlice.actions;
export default weatherSlice.reducer;