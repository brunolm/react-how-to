import * as React from 'react';
import './App.css';

import { createBrowserHistory } from 'history';
import { Link, Route, Router, Switch } from 'react-router-dom';

import Home from './components/home';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <header>
              <h2>React / TS</h2>
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
      </div>
    );
  }
}

export default App;
