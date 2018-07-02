import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.js';
import Repositories from './pages/repositories/repositories.js';
import Contributors from './pages/contributors/contributors.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/" component={Repositories} />
            <Route
              path="/contributors/:owner/:repository/"
              component={Contributors}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
