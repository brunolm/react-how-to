import { createReducer } from '../core/redux';
import { homeTypes } from '../actions';

export const initialState = {
  loading: false,
};

export const loading = (state = initialState, action) => {
  return {
    ...state,
    loading: action.loading,
  };
};

export const handlers = {
  [homeTypes.loading]: loading,
};

export default createReducer(initialState, {
  ...handlers,
});
