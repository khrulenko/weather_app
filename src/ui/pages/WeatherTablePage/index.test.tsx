import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import WeatherTablePage from '.';
import { oneWeatherCardMock } from '../../../common/mocks';
import { renderWithRedux } from '../../../common/testUtils';
import { State } from '../../../redux/store';

const errorState: State = {
  citiesSearch: {
    searchResults: [],
    error: false,
  },
  weather: {
    weatherCards: [],
    error: true,
    isAppLoading: false,
  },
};

const emptyState: State = {
  citiesSearch: {
    searchResults: [],
    error: false,
  },
  weather: {
    weatherCards: [],
    error: false,
    isAppLoading: false,
  },
};

const stateWithOneCity: State = {
  citiesSearch: {
    searchResults: [],
    error: false,
  },
  weather: {
    weatherCards: oneWeatherCardMock,
    error: false,
    isAppLoading: false,
  },
};

describe('Weather Table:', () => {
  test('should show empty city list alert page if there are no added cities', () => {
    renderWithRedux(<WeatherTablePage />, { initialState: emptyState });

    const emptyCityListPage = screen.getByText(
      /hi, there are no cities in your list yet/i
    );

    expect(emptyCityListPage).toBeInTheDocument();
  });

  test('should show error page if there is an error', () => {
    renderWithRedux(<WeatherTablePage />, { initialState: errorState });

    const errorPage = screen.getByText(/oops, something went wrong/i);

    expect(errorPage).toBeInTheDocument();
  });

  test('should remove city after delete button has been clicked', () => {
    renderWithRedux(
      <BrowserRouter>
        <WeatherTablePage />
      </BrowserRouter>,
      { initialState: stateWithOneCity }
    );

    const deleteButton = screen.getByLabelText(/delete/i);

    userEvent.click(deleteButton);

    const cityCard = screen.queryByText(/kyiv/i);

    expect(cityCard).toBeNull();
  });
});
