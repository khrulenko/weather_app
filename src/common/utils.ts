import { ChangeEvent } from 'react';
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

const createCityUrl = (name: string, lon: number, lat: number) =>
  `${URL_WEATHER}/${name}?lon=${lon}&lat=${lat}`;

export {
  createSelector,
  handleChange,
  kelvinToCelsius,
  numbersToString,
  createCityUrl,
};
