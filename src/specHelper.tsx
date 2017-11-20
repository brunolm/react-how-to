import * as Enzyme from 'enzyme';
import * as React from 'react';

export function shallow(Component, { store, props }: any) {
  if (store) {
    return Enzyme.shallow(<Component store={store} {...props} />);
  }

  return Enzyme.shallow(<Component {...props} />);
}

export type ShallowWrapper<TProps, TState> = Enzyme.ShallowWrapper<TProps, TState>;
