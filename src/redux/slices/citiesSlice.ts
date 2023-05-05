import { Action, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCitiesByName } from '../../common/api';
import { createSelector } from '../../common/utils';

interface CityData {
  name: string;
  country: string;
  lat: number;
  lon: number;
  state?: string;
}

type ApiCityData = CityData & { local_names: { [key: string]: string } };
type ApiCitiesData = ApiCityData[];
type CitiesData = CityData[];

export type Cities = {
  items: CitiesData;
  searchResults: CitiesData;
  error: boolean;
};

const initialState: Cities = {
  items: [],
  searchResults: [],
  error: false,
};

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity(state: Cities, action: PayloadAction<CityData>) {
      state.items.push(action.payload);

      return state;
    },
    clearSearchResults(state: Cities, action: Action) {
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
            const { local_names, ...props } = city;

            return props;
          });
        }
      )
      .addCase(fetchCitiesByName.rejected, (state: Cities) => {
        state.error = true;
      });
  },
});

export const getCities = createSelector('cities');
export const { addCity, clearSearchResults } = citiesSlice.actions;
export default citiesSlice.reducer;
