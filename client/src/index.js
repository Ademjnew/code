import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Router ,Switch, Route} from 'react-router-dom';

import App from './App.js';
import registerServiceWorker from './serviceWorker';

import { store, history } from './redux/store';


if (localStorage.Auth) {
    // update localstorage
    store.dispatch({type: 'SET_USER', user: JSON.parse(localStorage.Auth)})
}

ReactDOM.render((
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App}/>
            </Switch>
        </Router>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
