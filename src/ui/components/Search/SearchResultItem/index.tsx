import { useDispatch } from 'react-redux';
import { Paper, styled, Typography } from '@mui/material';
import { AppDispatch } from '../../../../common/types';
import { addCity, CityData } from '../../../../redux/slices/citiesSlice';
import { createItemWrapperStyles } from './styles';

interface SearchResultItemProps {
  city: CityData;
}

const ItemWrapper = styled(Paper)(createItemWrapperStyles);

const SearchResultItem = ({ city }: SearchResultItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const onAddCityHandler = () => {
    dispatch(addCity(city));
  };

  const { name, country, state } = city;

  return (
    <ItemWrapper onClick={onAddCityHandler}>
      <Typography>
        <b>Country: </b>
        {country}
        <br />

        <b>City: </b>
        {name}
        <br />

        {state && (
          <>
            <b>Region: </b>
            {state}
          </>
        )}
      </Typography>
    </ItemWrapper>
  );
};

export default SearchResultItem;
