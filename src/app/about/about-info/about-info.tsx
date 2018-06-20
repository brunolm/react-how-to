import './about-info.css';

import * as React from 'react';

export interface Props {
  message: any;
}

export interface State {
  loading: boolean;
}

export default class AboutInfo extends React.Component<Props, State> {
  render() {
    return (
      <div>
        <h2>About info box</h2>
        <p>Some text in here</p>
        <p>
          Your message was: <b>{this.props.message}</b>
        </p>
      </div>
    );
  }
}
