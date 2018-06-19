import { shallow, ShallowWrapper } from '../../../specHelper';
import Gravatar, { Props, State } from './gravatar';

describe('Gravatar', () => {
  let component: ShallowWrapper<Props, State>;

  beforeEach(() => {
    component = shallow(Gravatar, { props: { email: 'brunolm7@gmail.com' } });
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
