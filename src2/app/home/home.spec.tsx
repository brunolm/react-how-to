import * as Enzyme from 'enzyme';
import * as React from 'react';

import appStore from '../app.store';
import Home, { Props, PropsWithRoute, State } from './home';

describe('Home', () => {
  let component: Enzyme.ShallowWrapper<Props & PropsWithRoute, State>;

  beforeEach(() => {
    const routerProps = {
      match: {
        params: {
          name: 'brunolm',
        },
      },
    };

    component = Enzyme.shallow(<Home store={appStore} {...routerProps} />);
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
