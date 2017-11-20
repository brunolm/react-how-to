import { createReducer, createTypes } from './redux';

describe('redux', () => {
  describe('createReducer', () => {
    it('throws if initialState is falsy', () => {
      expect(() => createReducer(undefined, {})).toThrow('initialState is required');
    });

    it('returns a function to handle action types', () => {
      const reducer = createReducer({}, {});

      expect(reducer).toBeInstanceOf(Function);
    });

    describe('reducer handler', () => {
      let reducer: (state, action) => any;

      const mockActionTypes = { incrementFoo: 'INCREMENT_FOO' };
      const mockState = Object.freeze({ foo: 1 });
      const mockHandlers = {
        [mockActionTypes.incrementFoo]: (state = mockState, action) => ({ ...mockState, foo: mockState.foo + 1 }),
      };

      beforeAll(() => {
        reducer = createReducer(mockState, mockHandlers);
      });

      it('returns state unchanged if there is no action', () => {
        const state = reducer(mockState, undefined);

        expect(state).toEqual(mockState);
      });

      it('returns state unchanged if there is no action type', () => {
        const state = reducer(mockState, {});

        expect(state).toEqual(mockState);
      });

      it('returns state unchanged if there is no handler for action type', () => {
        const state = reducer(mockState, { type: 'no handler' });

        expect(state).toEqual(mockState);
      });

      it('returns state changed by handler for action type', () => {
        const state = reducer(mockState, { type: mockActionTypes.incrementFoo });

        expect(state).toEqual({ ...mockState, foo: mockState.foo + 1 });
      });
    });
  });

  describe('createTypes', () => {
    it('returns a new object with same keys and values as a copy of the key', () => {
      const types = createTypes({ foo: undefined });
      expect(types.foo).toBe('foo');
    });

    it('returns a new object with same keys and values as a copy of the key with a prefix when specified', () => {
      const types = createTypes({ foo: undefined }, { prefix: 'HOME' });
      expect(types.foo).toBe('HOME_foo');
    });
  });
});
