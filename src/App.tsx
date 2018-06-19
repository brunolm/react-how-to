import './App.css';

import { createBrowserHistory } from 'history';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import * as React from 'react';
import { Link, Route, Router, Switch } from 'react-router-dom';

import About from './app/about/about';
import Contact from './app/contact/contact';
import Home from './app/home/home';

const history = createBrowserHistory();

@inject('store')
@observer
class App extends React.Component<any, any> {
  render() {
    return (
      <div className="app">
        <Router history={history}>
          <div>
            <header>
              <h2>React / TS</h2>
            </header>
            <main>
              <nav>
                <ul>
                  <li>
                    <Link to="/">/</Link>
                  </li>
                  <li>
                    <Link to="/home/brunolm">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>

              <hr />

              <Switch>
                <Route exact={true} path="/" component={Home} />} />
                <Route path="/home/:name" component={Home} />} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
              </Switch>
            </main>
          </div>
        </Router>

        <DevTools />
      </div>
    );
  }
}

export default App;
