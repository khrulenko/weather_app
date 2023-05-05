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

export { createSelector, handleChange };
