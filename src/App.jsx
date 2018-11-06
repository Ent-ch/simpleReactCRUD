import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { HashRouter } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createHashHistory } from 'history';

import 'normalize.css/normalize.css';
import "@blueprintjs/core/src/blueprint.scss";
import './App.scss';

import AppContainer from './AppContainer.jsx';

const store = createStore(rootReducer);
const hashHistory = createHashHistory();
const history = syncHistoryWithStore(hashHistory, store);

class App extends React.Component {

  render() {

    return <Provider store={store}>
      <HashRouter history={history}>
        <AppContainer />
      </HashRouter>
    </Provider>
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);