import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getWeatherByCoordsThunk,
  refreshWeatherByCoordsThunk,
} from '../../common/api';
import { Coords } from '../../common/types';
import {
  createSelector,
  extractWeatherData,
  findCardIndex,
  immutablySortWeatherCards,
} from '../../common/utils';
import { CityData } from './citiesSearchSlice';

export interface WeatherCard {
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
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  hourlyTemp: number[];
}

export type Weather = {
  weatherCards: WeatherCard[];
  error: boolean;
  isAppLoading: boolean;
};

const initialState: Weather = {
  weatherCards: [],
  error: false,
  isAppLoading: true,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    deleteWeatherCard(state: Weather, action: PayloadAction<Coords>) {
      const { lat, lon } = action.payload;

      state.weatherCards = state.weatherCards.filter(
        ({ city }) => city.lat !== lat || city.lon !== lon
      );
    },
    setAppLoadingStatus(state: Weather, action: PayloadAction<boolean>) {
      state.isAppLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getWeatherByCoordsThunk.fulfilled,
        (state: Weather, action: PayloadAction<WeatherCard>) => {
          const data = extractWeatherData(action.payload);

          state.weatherCards.push(data);
          state.weatherCards = immutablySortWeatherCards(state.weatherCards);
        }
      )
      .addCase(getWeatherByCoordsThunk.rejected, (state: Weather) => {
        state.error = true;
      })
      .addCase(
        refreshWeatherByCoordsThunk.fulfilled,
        (state: Weather, action: PayloadAction<WeatherCard>) => {
          const data = extractWeatherData(action.payload);

          const cardIndex = findCardIndex(
            state.weatherCards,
            data.city.lat,
            data.city.lon
          );

          state.weatherCards[cardIndex] = data;
        }
      )
      .addCase(refreshWeatherByCoordsThunk.rejected, (state: Weather) => {
        state.error = true;
      });
  },
});

export const getWeather = createSelector('weather');
export const { deleteWeatherCard, setAppLoadingStatus } = weatherSlice.actions;
export default weatherSlice.reducer;
