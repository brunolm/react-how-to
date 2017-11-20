import Home, { Props, PropsDispatcher } from './';

import { shallow, ShallowWrapper } from '../../specHelper';
import configureMockStore from 'redux-mock-store';
import { homeTypes } from '../../actions';

const mockInitialState = {
  homeReducer: {
    loading: false,
  },
};

let mockState = { ...mockInitialState };

const mockStore = configureMockStore();
const store = mockStore(() => mockState);

const routerProps = {
  match: {
    params: {
      name: 'brunolm',
    },
  },
};

describe('Home', () => {
  let component: ShallowWrapper<Props & PropsDispatcher, any>;

  beforeEach(() => {
    component = shallow(Home, { store, props: routerProps });
  });
  afterEach(() => {
    mockState = { ...mockInitialState };
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });

  it('dispatches toggle status action on button click', () => {
    const toggleStatusButton = component.dive().find('.toggle-status');

    toggleStatusButton.simulate('click');

    expect(store.getActions().some((action) => action.type === homeTypes.loading))
      .toBeTruthy();
  });

  it('displays name value from url param', () => {
    const nameTitle = component.dive().find('h3.name-title');

    expect(nameTitle.text()).toBe('Hello brunolm');
  });

  it('displays done message', () => {
    const loadingMessage = component.dive().find('span.loading');

    expect(loadingMessage.text()).toBe('Done.');
  });

  describe('renderLoading', () => {
    let instance: Home;

    beforeEach(() => {
      instance = component.dive().instance() as Home;
    });

    it('renders done message when not loading', () => {
      const Loading = instance.renderLoading();
      expect(Loading.props.children).toBe('Done.');
    });

    it('renders loading message', () => {
      mockState.homeReducer.loading = true;
      component = shallow(Home, { store, props: routerProps });
      instance = component.dive().instance() as Home;

      const Loading = instance.renderLoading();
      expect(Loading.props.children).toBe('Loading...');
    });
  });

  describe('when no params in url', () => {
    beforeEach(() => {
      const props = {
        ...routerProps,
        match: {
          ...routerProps.match,
          params: {
            ...routerProps.match.params,
            name: undefined,
          },
        },
      };

      component = shallow(Home, {
        store,
        props,
      });
    });

    it('displays "no name"', () => {
      const nameTitle = component.dive().find('h3.name-title');

      expect(nameTitle.text()).toBe('Hello no name');
    });
  });
});
