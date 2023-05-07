import { ChangeEvent } from 'react';
import { WeatherCard } from '../redux/slices/weatherSlice';
import { Store } from '../redux/store';
import { URL_WEATHER } from '../routing/URLs';
import { AnyFunction } from './types';

const createSelector =
  <K extends keyof Store>(dataField: K) =>
  (state: Store) =>
    state[dataField];

const handleChange =
  (action: AnyFunction) =>
  ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    action(value);
  };

const kelvinToCelsius = (kelvin: number): number => Math.round(kelvin - 273.15);

const numbersToString = (num1: number, num2: number) =>
  num1.toString() + num2.toString();

const createCityUrl = (name: string, lat: number, lon: number) =>
  `${URL_WEATHER}/${name}?lat=${lat}&lon=${lon}`;

const extractWeatherData = (apiWeatherData: WeatherCard): WeatherCard => {
  const {
    city,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    wind: { speed },
  } = apiWeatherData;

  return {
    city,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    wind: { speed },
  };
};

const findCardIndex = (cardList: WeatherCard[], lat: number, lon: number) =>
  cardList.findIndex(({ city }) => city.lat === lat && city.lon === lon);

export {
  createSelector,
  handleChange,
  kelvinToCelsius,
  numbersToString,
  createCityUrl,
  extractWeatherData,
  findCardIndex,
};
