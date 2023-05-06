import { useDispatch, useSelector } from 'react-redux';
import { Paper, styled, Typography, PaperProps, Stack } from '@mui/material';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { AppDispatch } from '../../../../common/types';
import {
  addCity,
  CityData,
  getCities,
} from '../../../../redux/slices/citiesSlice';
import { createItemWrapperStyles } from './styles';

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
  const { items } = useSelector(getCities);

  const { name, country, state, lon, lat } = city;
  const isAdded = items.some((item) => item.lon === lon && item.lat === lat);

  const onAddCityHandler = () => {
    if (isAdded) return;

    dispatch(addCity(city));
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
