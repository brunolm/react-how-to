import { shallow, ShallowWrapper } from '../../specHelper';
import About, { Props, State } from './about';

describe('About', () => {
  let component: ShallowWrapper<Props, State>;

  beforeEach(() => {
    component = shallow(About, {});
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
