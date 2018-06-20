import { inject, observer } from 'mobx-react';
import * as React from 'react';

export interface Props {
  store?: any;
  id: number;
}

export interface State {
  elementOne: boolean;
}

@inject('store')
@observer
export default class HomeInput extends React.Component<Props, State> {
  change = ({ target }) => {
    this.props.store.home.changeTitle(target.value, this.props.id);
  };

  render() {
    console.log('this.props.store.home', this.props.store);

    return (
      <div className="home">
        <h2>{this.props.store.home.homeTitle[this.props.id]}</h2>
        <input type="text" value={this.props.store.home.homeTitle[this.props.id]} onChange={this.change} />
      </div>
    );
  }
}
