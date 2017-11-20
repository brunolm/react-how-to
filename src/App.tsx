import * as React from 'react';
import './App.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { createBrowserHistory } from 'history';
import { Link, Route, Router, Switch } from 'react-router-dom';

import reducers from './reducers';

import Home from './components/home';

const store = createStore(reducers);
const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <Provider store={store} key="provider">
        <Router history={history}>
          <div>
            <header>
              <h2>React / TS / Redux</h2>
            </header>
            <main>
              <ul>
                <li>
                  <Link to="/">/</Link>
                </li>
                <li>
                  <Link to="/home/brunolm">Home</Link>
                </li>
              </ul>

              <hr />

              <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route path="/home/:name" component={Home} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
