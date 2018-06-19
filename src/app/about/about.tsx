import './about.css';

import * as React from 'react';

import AboutInfo from './about-info/about-info';

export interface Props {
  _?: any;
}

export interface State {
  loading: boolean;
}

export default class About extends React.Component<Props, State> {
  render() {
    return (
    <div>
      About page works

      <AboutInfo message="Message from About component" />
    </div>);
  }
}