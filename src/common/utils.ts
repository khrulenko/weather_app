import { ChangeEvent } from 'react';
import { Store } from '../redux/store';
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

export { createSelector, handleChange, kelvinToCelsius, numbersToString };
