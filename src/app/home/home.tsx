import './home.css';

import { inject, observer } from 'mobx-react';
import * as React from 'react';

import Counter from './counter/couter';

export interface Props {
  something?: string;
  store: any;
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

@inject('store')
@observer
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
    this.props.store.updateTitle();
  }

  render() {
    const { store } = this.props;
    const { params } = this.props.match;
    const { elementOne } = this.state;

    const name = params.name || 'no name';

    return (
      <div className="home">
        <h2>{store.title}</h2>
        <h3 className="name-title">Hello {name}</h3>
        <button className="toggle-status" onClick={this.toggle}>
          Toggle Status
        </button>

        {elementOne && <span>Element #1</span>}
        {!elementOne && <span>Another element</span>}

        <hr />
        <Counter />
        {/* <Counter store={store} /> */}
      </div>
    );
  }
}
