import { Store } from '../redux/store';

const createSelector =
  <K extends keyof Store>(dataField: K) =>
  (state: Store) =>
    state[dataField];

export { createSelector };
