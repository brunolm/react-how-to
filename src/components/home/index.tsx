import './index.css';

import * as React from 'react';

import { Dispatch, connect } from 'react-redux';

import { homeTypes } from '../../actions';

const mapStateToProps = (state) => {
  return {
    ...state.homeReducer,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  toggleLoading: (options) => dispatch({ type: homeTypes.loading, ...options }),
});

export interface Props {
  loading: boolean;
}
export interface PropsWithRoute {
  match: {
    params: {
      name: string;
    };
  };
}
export interface PropsDispatcher {
  toggleLoading: (options: any) => void;
}

@(connect(mapStateToProps, mapDispatchToProps) as any)
export default class Home extends React.Component<Props & PropsWithRoute & PropsDispatcher, {}> {
  toggleStatus = () => {
    const { loading } = this.props;

    this.props.toggleLoading({
      loading: !loading,
    });
  }

  renderLoading() {
    const { loading } = this.props;

    if (loading) {
      return (<span className="loading active">Loading...</span>);
    }

    return (<span className="loading">Done.</span>);
  }

  render() {
    const { params } = this.props.match;
    const name = params.name || 'no name';

    return (
      <main>
        <h3 className="name-title">Hello {name}</h3>
        <button className="toggle-status" onClick={this.toggleStatus}>Toggle Status</button>

        {this.renderLoading()}
      </main>
    );
  }
}
