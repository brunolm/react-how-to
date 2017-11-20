import App from './App';

import { shallow } from './specHelper';

describe('App', () => {
  it('renders without crashing', () => {
    const component = shallow(App, {});
    expect(component).toBeTruthy();
  });
});
