import React from 'react';
import { connect } from 'react-redux';
import { HashRouter, Route, Redirect, Link, Switch } from 'react-router-dom';
import { Button, Card, Elevation } from "@blueprintjs/core";

import Header from './components/Header.jsx';
import Login from './components/Login.jsx';

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

const Home = props => {
  return <div className="sendBlock">
    <h1>Wellcome</h1>
  </div>;
};

const loginPage = props => {
  return <Login />;
};

const Detail = ({ match: { params: { id }}}) => <DeatailsPage id={id} />;

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  render() {
    console.log(this.props);

    return <div className="appMain">

      <Header />

      <Switch>
        <Card>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/login" component={loginPage} />
          <Route path="/detail/:id" component={Detail} />
        </Card>
      </Switch>

        <footer>
          <div className=".bp3-text-large">
            <Link to="/">Nacc</Link>
          </div>
        </footer>
      </div>
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  // toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
