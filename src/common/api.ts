import { createAsyncThunk } from '@reduxjs/toolkit';
import { CityData } from '../redux/slices/citiesSearchSlice';
import { OPENWEATHERMAP_API_KEY } from './constants';

const fetchCitiesByName = createAsyncThunk(
  'cities/fetchCity',
  async (cityName: string) => {
    try {
      const cityResponse = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${OPENWEATHERMAP_API_KEY}`
      );

      if (!cityResponse.ok) {
        throw new Error();
      }

      const cityData = await cityResponse.json();

      return cityData;
    } catch {
      throw new Error();
    }
  }
);

const fetchWeatherByCoords = async (city: CityData) => {
  const { lat, lon } = city;

  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP_API_KEY}`
    );

    if (!weatherResponse.ok) {
      throw new Error();
    }

    const weatherData = await weatherResponse.json();

    return { ...weatherData, city };
  } catch {
    throw new Error();
  }
};

const getWeatherByCoordsThunk = createAsyncThunk(
  'weather/fetchWeather',
  fetchWeatherByCoords
);

const refreshWeatherByCoordsThunk = createAsyncThunk(
  'weather/refreshWeather',
  fetchWeatherByCoords
);

export {
  fetchCitiesByName,
  getWeatherByCoordsThunk,
  refreshWeatherByCoordsThunk,
};
