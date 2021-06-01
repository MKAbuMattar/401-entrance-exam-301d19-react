import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Favorite from './components/Favorite';

export class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/favorite' component={Favorite} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default App;
