import Home, { Props, PropsWithRoute, State } from './';

import { shallow, ShallowWrapper } from '../../specHelper';

describe('Home', () => {
  let component: ShallowWrapper<Props & PropsWithRoute, State>;

  beforeEach(() => {
    const routerProps = {
      match: {
        params: {
          name: 'brunolm',
        },
      },
    };

    component = shallow(Home, { props: routerProps });
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('toggles status on button click', () => {
    const toggleStatusButton = component.find('.toggle-status');

    expect(component.state().loading).toBeFalsy();

    toggleStatusButton.simulate('click');

    expect(component.state().loading).toBeTruthy();
  });

  it('displays name value from url param', () => {
    const nameTitle = component.find('h3.name-title');

    expect(nameTitle.text()).toBe('Hello brunolm');
  });

  describe('', () => {
    beforeEach(() => {
      const routerProps = {
        match: {
          params: {
            name: undefined,
          },
        },
      };

      component = shallow(Home, { props: routerProps });
    });

    it('displays "no name" when there are no values from url param', () => {
      const nameTitle = component.find('h3.name-title');

      expect(nameTitle.text()).toBe('Hello no name');
    });
  });
});
