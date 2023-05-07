import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, TextField } from '@mui/material';
import { fetchCitiesByName } from '../../../common/api';
import { AppDispatch } from '../../../common/types';
import { handleChange, numbersToString } from '../../../common/utils';
import {
  clearSearchResults,
  getCities,
} from '../../../redux/slices/citiesSearchSlice';
import SearchResultItem from './SearchResultItem';
import ErrorPage from '../../pages/ErrorPage';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const citiesData = useSelector(getCities);
  const { searchResults, error } = citiesData;

  const onSearch = (value: string) => {
    setSearchQuery(value);

    if (value) {
      dispatch(fetchCitiesByName(value));
      return;
    }

    dispatch(clearSearchResults());
  };

  const onHandleSearch = handleChange(onSearch);

  return (
    <Stack spacing="16px">
      <TextField
        value={searchQuery}
        onChange={onHandleSearch}
        label={'search city'}
        size="small"
      />

      {error ? (
        <ErrorPage />
      ) : (
        <Stack spacing="8px">
          {searchResults.map((city) => (
            <SearchResultItem
              key={numbersToString(city.lat, city.lon)}
              city={city}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
};
export default Search;
