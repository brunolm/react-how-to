import './index.css';

import { configure } from 'mobx';
import { Provider } from 'mobx-react';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import appStore from './App.store';
import registerServiceWorker from './registerServiceWorker';

configure({ enforceActions: true });

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
