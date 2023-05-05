import { createAsyncThunk } from '@reduxjs/toolkit';
import { OPENWEATHERMAP_API_KEY } from './constants';

const fetchCitiesByName = createAsyncThunk(
  'cities/fetchCity',
  async (cityName: string) => {
    try {
      const cityResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${OPENWEATHERMAP_API_KEY}`
      );
      const cityData = await cityResponse.json();

      return cityData;
    } catch {
      throw new Error();
    }
  }
);

export { fetchCitiesByName };
