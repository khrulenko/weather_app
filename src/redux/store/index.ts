import { configureStore } from '@reduxjs/toolkit';
import citiesReducer, { Cities } from '../slices/citiesSlice';

export interface Store {
  cities: Cities;
}

// redusers
export const reducers = {
  cities: citiesReducer,
};

// store
export const store = configureStore({
  reducer: reducers,
});

export default store;
