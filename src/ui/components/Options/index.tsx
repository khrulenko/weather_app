import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Stack } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import TooltipButton from '../TooltipButton';
import { CityData } from '../../../redux/slices/citiesSearchSlice';
import { AppDispatch } from '../../../common/types';
import { refreshWeatherByCoordsThunk } from '../../../common/api';
import { deleteWeatherCard } from '../../../redux/slices/weatherSlice';
import { URL_WEATHER } from '../../../routing/URLs';

interface OptionsProps {
  city: CityData;
}

const Options = ({ city }: OptionsProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const onDeleteWeatherCard = () => {
    navigate(URL_WEATHER);
    dispatch(deleteWeatherCard({ lon: city.lon, lat: city.lat }));
  };

  const onRefreshWeatherCard = () => {
    dispatch(refreshWeatherByCoordsThunk(city));
  };

  return (
    <Stack direction="row" justifyContent="flex-end">
      <TooltipButton
        title="Refresh"
        hasAnimation
        onClick={onRefreshWeatherCard}
      >
        <SyncOutlinedIcon />
      </TooltipButton>

      <TooltipButton title="Delete" onClick={onDeleteWeatherCard}>
        <HighlightOffOutlinedIcon />
      </TooltipButton>
    </Stack>
  );
};

export default Options;
