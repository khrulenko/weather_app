import { useDispatch, useSelector } from 'react-redux';
import { Paper, styled, Typography, PaperProps, Stack } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { AppDispatch } from '../../../../common/types';
import { CityData } from '../../../../redux/slices/citiesSearchSlice';
import { createItemWrapperStyles } from './styles';
import { getWeatherByCoordsThunk } from '../../../../common/api';
import { getWeather } from '../../../../redux/slices/weatherSlice';

interface SearchResultItemProps {
  city: CityData;
}

export type ItemWrapperProps = {
  isAdded: boolean;
} & PaperProps;

const getDataRow = (fieldName: string, value: string) => (
  <>
    <b>{fieldName}: </b>
    {value}
  </>
);

const ItemWrapper = styled(Paper)(createItemWrapperStyles);

const SearchResultItem = ({ city }: SearchResultItemProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { weatherCards } = useSelector(getWeather);

  const { name, country, state, lat, lon } = city;
  const isAdded = weatherCards.some(
    (card) => card.city.lat === lat && card.city.lon === lon
  );

  const onAddCityHandler = () => {
    if (isAdded) return;

    dispatch(getWeatherByCoordsThunk(city));
  };

  const statusIcon = isAdded ? (
    <CheckCircleRoundedIcon />
  ) : (
    <AddCircleOutlineRoundedIcon />
  );

  return (
    <ItemWrapper onClick={onAddCityHandler} isAdded={isAdded}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{getDataRow('Country', country)}</Typography>

        {statusIcon}
      </Stack>

      <Typography>
        {getDataRow('City', name)}

        <br />

        {state && getDataRow('Region', state)}
      </Typography>
    </ItemWrapper>
  );
};

export default SearchResultItem;
