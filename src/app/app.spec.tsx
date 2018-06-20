import * as Enzyme from 'enzyme';
import * as React from 'react';

import App from './app';
import appStore from './app.store';

describe('App', () => {
  it('renders without crashing', () => {
    const component = Enzyme.shallow(<App store={appStore} />);
    expect(component).toBeTruthy();
  });
});
