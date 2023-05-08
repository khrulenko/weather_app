import { configureStore } from '@reduxjs/toolkit';
import citiesSearchReducer, { Cities } from '../slices/citiesSearchSlice';
import weatherReducer, { Weather } from '../slices/weatherSlice';

export interface State {
  citiesSearch: Cities;
  weather: Weather;
}

// redusers
export const reducers = {
  citiesSearch: citiesSearchReducer,
  weather: weatherReducer,
};

// store
export const store = configureStore({
  reducer: reducers,
});

export default store;
