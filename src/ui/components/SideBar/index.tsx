import { Button, Drawer, DrawerProps, Stack, styled } from '@mui/material';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import {
  createSideBarWrapperStyles,
  createSideBarBodyStyles,
  createSideBarButtonStyles,
} from './styles';
import Search from '../Search';
import { AnyFunction } from '../../../common/types';

export type SideBarProps = {
  toggler: AnyFunction;
} & DrawerProps;

const SideBarWrapper = styled(Drawer)(createSideBarWrapperStyles);
const SideBarBody = styled(Stack)(createSideBarBodyStyles);
const SideBarButton = styled(Button)(createSideBarButtonStyles);

const SideBar = ({ toggler, open }: SideBarProps) => {
  const NavBarButtonIcon = open ? (
    <KeyboardDoubleArrowLeftRoundedIcon />
  ) : (
    <KeyboardDoubleArrowRightRoundedIcon />
  );

  return (
    <SideBarWrapper anchor="left" variant="permanent" open={open}>
      <SideBarButton onClick={toggler}>{NavBarButtonIcon}</SideBarButton>

      <SideBarBody open={open}>
        <Search />
      </SideBarBody>
    </SideBarWrapper>
  );
};

export default SideBar;
