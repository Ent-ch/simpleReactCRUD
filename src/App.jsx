import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Redirect, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Button, Card, Elevation } from "@blueprintjs/core";

import 'normalize.css/normalize.css';
import "@blueprintjs/core/src/blueprint.scss";
import './App.scss';

import Header from './components/Header.jsx';

const store = createStore(rootReducer);
const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const Home = props => {
  return <div className="sendBlock">
  </div>;
};

const List = props => {
  return <div />;
};

const Detail = ({ match: { params: { id }}}) => <DeatailsPage id={id} />;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  handleSend(url, gps, timeFoto) {
    this.setState({sent: true, url, gps, timeFoto});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.sent) {
      this.setState({sent: false});
    }
  }

  render() {
    const { sent, url, gps, timeFoto } = this.state;

    return (<Provider store={store}>
      <HashRouter>
      <div className="appMain">
        {sent && <Redirect to="/new"/>}

      <Header />
      <Card interactive={true} elevation={Elevation.TWO}>
          <h5><a href="#">Card heading</a></h5>
          <p>Card content</p>
          <Button>Submit</Button>
        <Switch>
          <Route exact path="/" component={() => <Home handleSend={this.handleSend} />} />
          <Route path="/latest" component={List} />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </Card>

        <footer>
          <div className=".bp3-text-large">
            <Link to="/">Nacc</Link>
          </div>
        </footer>
      </div>
      </HashRouter>
      </Provider>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById("app")
);