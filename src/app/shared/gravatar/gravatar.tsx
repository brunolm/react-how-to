import * as md5 from 'md5';
import * as React from 'react';

export interface Props {
  email: any;
}

export interface State {
  loading: boolean;
}

export default class Gravatar extends React.Component<Props, State> {
  render() {
    const hash = md5(this.props.email);

    return (
      <div>
        <img src={`http://www.gravatar.com/avatar/${hash}`} alt="" />
      </div>
    );
  }
}
