import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack, TextField } from '@mui/material';
import { fetchCitiesByName } from '../../../common/api';
import { AppDispatch } from '../../../common/types';
import { handleChange } from '../../../common/utils';
import {
  clearSearchResults,
  getCities,
} from '../../../redux/slices/citiesSlice';
import SearchResultItem from './SearchResultItem';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();
  const citiesData = useSelector(getCities);
  const { searchResults } = citiesData;

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

      <Stack spacing="8px">
        {searchResults.map((city) => (
          <SearchResultItem key={city.lat + city.lon} city={city} />
        ))}
      </Stack>
    </Stack>
  );
};
export default Search;
