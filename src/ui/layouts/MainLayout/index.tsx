import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Stack, styled } from '@mui/material';
import SideBar from '../../components/SideBar';
import { createContentWrapperStyles } from './styles';
import { getWeather } from '../../../redux/slices/weatherSlice';
import { useSelector } from 'react-redux';
import Loader from '../../components/Loader';

const ContentWrapper = styled(Stack)(createContentWrapperStyles);

const MainLayout = () => {
  const [isSearchOpened, setIsSearchOpened] = useState<boolean>(true);
  const { isAppLoading } = useSelector(getWeather);
  const toggleMenu = () => setIsSearchOpened((prevState) => !prevState);

  if (isAppLoading) {
    return <Loader />;
  }

  return (
    <Stack direction="row">
      <SideBar open={isSearchOpened} toggler={toggleMenu} />

      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
    </Stack>
  );
};

export default MainLayout;
