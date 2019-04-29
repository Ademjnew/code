import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import requireAuthentication from './utils/requireAuth'
import Home from './features/Home/container'
import Locations from './features/Locations/container'
import Login from './features/Login/container'
import Register from './features/Register/container'
import Header from './layouts/Header'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Switch>
              <Route  path="/locations" component={requireAuthentication(Locations,false)} />
              <Route  path="/login" component={Login} />
              <Route  path="/register" component={Register} />
              <Route path="/" component={requireAuthentication(Home,false)} />
          </Switch>
      </div>
    );
  }
}

export default App;
