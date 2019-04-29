import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import {Nav} from './components/Nav';
import {AddMovie} from './components/Movies/AddMovie';
import {EditMovie} from './components/Movies/EditMovie';

import {MoviesList} from './components/Movies/MoviesList';
import {Error404} from './components/Error404';
import {UserMovies} from "./components/Movies/UserMovies"

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    // Switch goes to first matching route
    render() {
        return (
            <div className="app">
                <Router>
                    <div className="route-container">
                        <Nav/>
                        <Switch>
                            <Route exact path="/" render={(props) => (
                                <UserMovies/>
                            )}/>
                            <Route path="/list" render={(props) => (
                                <MoviesList/>
                            )}/>
                            <Route path="/add" render={(props) => (
                                <AddMovie/>
                            )}/>
                            <Route path="/edit/:id" render={(props) => (
                                <EditMovie {...props}/>
                            )}/>
                            <Route component={Error404}/>
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}
