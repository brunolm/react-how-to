import 'raf/polyfill';

import * as Adapter from 'enzyme-adapter-react-16';

import { configure, mount, render, shallow } from 'enzyme';

configure({ adapter: new Adapter() });
