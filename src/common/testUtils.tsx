import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { combineReducers, Store as ReduxStore } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import { render, RenderOptions } from '@testing-library/react';
import { reducers, State } from '../redux/store';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialState?: State;
  store?: ReduxStore;
}

const rootReducer = combineReducers(reducers);

const renderWithRedux = (
  component: React.ReactElement,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) => {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return {
    store,
    ...render(component, { wrapper: Wrapper, ...renderOptions }),
  };
};

export { renderWithRedux };
