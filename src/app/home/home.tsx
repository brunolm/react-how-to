import './home.css';

import * as React from 'react';

export interface Props {
  something?: string;
}

export interface PropsWithRoute {
  match: {
    params: {
      name: string;
    };
  };
}

export interface State {
  elementOne: boolean;
}

export default class Home extends React.Component<Props & PropsWithRoute, State> {
  constructor(props) {
    super(props);

    this.state = {
      elementOne: false,
    };
  }

  toggle = () => {
    const { elementOne } = this.state;

    this.setState({ elementOne: !elementOne });
  }

  render() {
    const { params } = this.props.match;
    const { elementOne } = this.state;

    const name = params.name || 'no name';

    return (
      <div className="home">
        <h3 className="name-title">Hello {name}</h3>
        <button className="toggle-status" onClick={this.toggle}>
          Toggle Status
        </button>

        {elementOne && <span>Element #1</span>}
        {!elementOne && <span>Another element</span>}
      </div>
    );
  }
}
