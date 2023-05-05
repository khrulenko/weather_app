import { useDispatch, useSelector } from 'react-redux';
import { fetchCitiesByName } from '../../common/api';
import { AppDispatch } from '../../common/types';
import {
  addCity,
  clearSearchResults,
  getCities,
} from '../../redux/slices/citiesSlice';

const SearchBar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const citiesData = useSelector(getCities);
  const { searchResults } = citiesData;

  return (
    <div style={{ width: '300px', height: '500px', border: '1px solid black' }}>
      <input
        onChange={(event) => {
          const { value } = event.target;

          if (value) {
            dispatch(fetchCitiesByName(value));
            return;
          }

          dispatch(clearSearchResults());
        }}
      />

      {searchResults.map((city) => (
        <div
          onClick={() => {
            dispatch(addCity(city));
          }}
        >
          {city.name}, {city.country}, {city.state}
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
