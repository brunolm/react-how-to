import { shallow, ShallowWrapper } from '../../../specHelper';
import ContactForm, { Props, State } from './contact-form';

describe('ContactForm', () => {
  let component: ShallowWrapper<Props, State>;

  beforeEach(() => {
    component = shallow(ContactForm, {});
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
