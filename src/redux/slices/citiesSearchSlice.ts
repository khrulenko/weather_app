import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCitiesByName } from '../../common/api';
import { StringObject } from '../../common/types';
import { createSelector } from '../../common/utils';

export interface CityData {
  name: string;
  country: string;
  lat: number;
  lon: number;
  state?: string;
}

type ApiCityData = CityData & { local_names: StringObject };
type ApiCitiesData = ApiCityData[];
type CitiesData = CityData[];

export type Cities = {
  searchResults: CitiesData;
  error: boolean;
};

const initialState: Cities = {
  searchResults: [],
  error: false,
};

const citiesSearchSlice = createSlice({
  name: 'citiesSearch',
  initialState,
  reducers: {
    clearSearchResults(state: Cities) {
      state.searchResults = [];

      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCitiesByName.fulfilled,
        (state: Cities, action: PayloadAction<ApiCitiesData>) => {
          state.searchResults = action.payload.map((city) => {
            const { local_names, ...rest } = city;

            return rest;
          });
        }
      )
      .addCase(fetchCitiesByName.rejected, (state: Cities) => {
        state.error = true;
      });
  },
});

export const getCities = createSelector('citiesSearch');
export const { clearSearchResults } = citiesSearchSlice.actions;
export default citiesSearchSlice.reducer;
