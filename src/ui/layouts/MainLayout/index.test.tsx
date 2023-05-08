import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  fetchedWeatherMock,
  fetchedTempMock,
  searchResultMock,
  weatherCardsMock,
} from '../../../common/mocks';
import { renderWithRedux } from '../../../common/testUtils';
import { State } from '../../../redux/store';
import AppRoutes from '../../../routing/Routes';
import theme from '../../styles/theme';

const errorState: State = {
  citiesSearch: {
    searchResults: [],
    error: true,
  },
  weather: {
    weatherCards: [],
    error: false,
    isAppLoading: false,
  },
};

const stateWithCitiesAndSearch: State = {
  citiesSearch: {
    searchResults: searchResultMock,
    error: false,
  },
  weather: {
    weatherCards: weatherCardsMock,
    error: false,
    isAppLoading: false,
  },
};

describe('Main layout:', () => {
  test('should remove city after delete button has been clicked', () => {
    renderWithRedux(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>,
      { initialState: errorState }
    );

    const errorPage = screen.getByText(/oops, something went wrong/i);

    expect(errorPage).toBeInTheDocument();
  });

  test('should remove city after delete button has been clicked', async () => {
    const spy = jest.spyOn(window, 'fetch');

    const mockWeatherResponse = new Response(
      JSON.stringify(fetchedWeatherMock)
    );
    spy.mockResolvedValueOnce(Promise.resolve(mockWeatherResponse));

    const mockTempResponse = new Response(JSON.stringify(fetchedTempMock));
    spy.mockResolvedValueOnce(Promise.resolve(mockTempResponse));

    renderWithRedux(
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>,
      { initialState: stateWithCitiesAndSearch }
    );

    const initialWeatherCards = screen.getAllByTestId('weatherCard');
    expect(initialWeatherCards).toHaveLength(3);

    const searchResult = screen.getByText(/kyiv/i);
    userEvent.click(searchResult);

    await waitFor(() => expect(spy).toHaveBeenCalledTimes(2));

    const weatherCards = screen.getAllByTestId('weatherCard');
    expect(weatherCards).toHaveLength(4);

    spy.mockRestore();
  });
});
