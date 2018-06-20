import { shallow, ShallowWrapper } from '../../specHelper';
import Contact, { Props, State } from './contact';

describe('Contact', () => {
  let component: ShallowWrapper<Props, State>;

  beforeEach(() => {
    component = shallow(Contact, {});
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
