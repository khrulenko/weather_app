import { ReactNode } from 'react';
import { Paper, Stack, styled, Typography } from '@mui/material';
import { createWeatherDetailCardWrapperStyles } from './styles';

export interface WeatherDetails {
  header: string;
  value: string | number;
  icon: ReactNode;
}

const WeatherDetailCardWrapper = styled(Paper)(
  createWeatherDetailCardWrapperStyles
);

const WeatherDetailCard = ({ header, value, icon }: WeatherDetails) => (
  <WeatherDetailCardWrapper>
    {icon}

    <Stack alignItems="center">
      <Typography fontWeight="bold">{header}:</Typography>
      <Typography>{value}</Typography>
    </Stack>
  </WeatherDetailCardWrapper>
);

export default WeatherDetailCard;
