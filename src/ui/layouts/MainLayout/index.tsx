import { Outlet } from 'react-router-dom';
import SearchBar from '../../components/SearchBar';

const MainLayout = () => {
  return (
    <div style={{ height: '100%', display: 'flex' }}>
      <SearchBar />

      <Outlet />
    </div>
  );
};

export default MainLayout;
