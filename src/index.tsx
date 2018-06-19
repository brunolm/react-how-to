import './index.css';

import { configure } from 'mobx';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import Store from './App.store';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

const store = new Store();

configure({ enforceActions: true });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
