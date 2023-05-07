import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../ui/layouts/MainLayout';
import CityWeatherPage from '../ui/pages/CityWeatherPage';
import WeatherTablePage from '../ui/pages/WeatherTablePage';
import { URL_WEATHER, URL_WEATHER_CITY } from './URLs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={URL_WEATHER} />} />
        <Route path={URL_WEATHER} element={<WeatherTablePage />} />
        <Route path={URL_WEATHER_CITY} element={<CityWeatherPage />} />

        <Route
          path="*"
          element={<div>Page not found, try something else</div>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
