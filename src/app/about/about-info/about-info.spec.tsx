import { shallow, ShallowWrapper } from '../../../specHelper';
import AboutInfo, { Props, State } from './about-info';

describe('AboutInfo', () => {
  let component: ShallowWrapper<Props, State>;

  beforeEach(() => {
    component = shallow(AboutInfo, {});
  });

  it('renders without crashing', () => {
    expect(component).toBeTruthy();
  });
});
