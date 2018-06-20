import { inject, observer } from 'mobx-react';
import * as React from 'react';

export interface Props {
  store?: any;
}

export interface State {
  elementOne: boolean;
}

@inject('store')
@observer
export default class Counter extends React.Component<Props, State> {
  toggle = () => {
    this.props.store.count();
    this.props.store.home.changeTitle();
  };

  render() {
    const { store } = this.props;

    console.log('store.home', store);

    return (
      <div className="home">
        <h2>Counter: {store.counter}</h2>
        <button className="toggle-status" onClick={this.toggle}>
          Toggle Status
        </button>

        <h2>Home title: {this.props.store.home.homeTitle}</h2>
      </div>
    );
  }
}
