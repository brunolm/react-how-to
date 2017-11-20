import { loading, handlers, initialState } from './home';

import { homeTypes } from '../actions';

describe('homeReducer', () => {
  describe('reducers', () => {
    describe('loading', () => {
      it('returns loading status false for initial state', () => {
        const action = { type: homeTypes.loading };

        expect(loading(undefined, action))
          .toHaveProperty('loading', false);
      });

      it('returns loading status false', () => {
        const action = { type: homeTypes.loading, loading: false };

        expect(loading(initialState, action))
          .toHaveProperty('loading', false);
      });

      it('returns loading status true', () => {
        const action = { type: homeTypes.loading, loading: true };

        expect(loading(initialState, action))
          .toHaveProperty('loading', true);
      });
    });

  });

  describe('handlers', () => {
    it('loading', () => {
      expect(handlers[homeTypes.loading]).toEqual(loading);
    });
  });
});
