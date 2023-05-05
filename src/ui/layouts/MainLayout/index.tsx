import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Stack, styled } from '@mui/material';
import SideBar from '../../components/SideBar';
import { createContentWrapperStyles } from './styles';

const ContentWrapper = styled(Stack)(createContentWrapperStyles);

const MainLayout = () => {
  const [isSearchOpened, setIsSearchOpened] = useState<boolean>(true);
  const toggleMenu = () => setIsSearchOpened((prevState) => !prevState);

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
