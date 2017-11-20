import './index.css';

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
  loading: boolean;
}

export default class Home extends React.Component<Props & PropsWithRoute, State> {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  toggleStatus = () => {
    const { loading } = this.state;

    this.setState({ loading: !loading });
  }

  render() {
    const { params } = this.props.match;
    const { loading } = this.state;

    const name = params.name || 'no name';

    return (
      <div>
        <h3 className="name-title">Hello {name}</h3>
        <button className="toggle-status" onClick={this.toggleStatus}>Toggle Status</button>

        {loading &&
          <span>Loading...</span>
        }
        {!loading &&
          <span>Done.</span>
        }
      </div>
    );
  }
}
