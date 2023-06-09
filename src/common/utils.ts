import { ChangeEvent } from 'react';
import { WeatherCard } from '../redux/slices/weatherSlice';
import { State } from '../redux/store';
import { URL_WEATHER } from '../routing/URLs';
import { AnyFunction } from './types';

const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
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
    hourlyTemp,
  } = apiWeatherData;

  return {
    city,
    weather,
    main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
    wind: { speed },
    hourlyTemp: hourlyTemp.slice(0, 24),
  };
};

const findCardIndex = (cardList: WeatherCard[], lat: number, lon: number) =>
  cardList.findIndex(({ city }) => city.lat === lat && city.lon === lon);

const getTemperatureColor = (temp: number): string => {
  if (temp < 0) return 'powderblue';
  if (temp < 5) return 'lightcyan';
  if (temp < 10) return 'paleturquoise';
  if (temp < 15) return 'palegreen';
  if (temp < 20) return 'lightgreen';
  if (temp < 25) return 'lemonchiffon';
  if (temp < 30) return 'moccasin';

  return 'mistyrose';
};

const immutablySortWeatherCards = (
  weatherCards: WeatherCard[]
): WeatherCard[] =>
  [...weatherCards].sort((a, b) =>
    a.city.name.toLowerCase().localeCompare(b.city.name.toLowerCase())
  );

export {
  createSelector,
  handleChange,
  kelvinToCelsius,
  numbersToString,
  createCityUrl,
  extractWeatherData,
  findCardIndex,
  getTemperatureColor,
  immutablySortWeatherCards,
};
