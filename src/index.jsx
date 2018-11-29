/**
 | Core Components
 */
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
/**
 | Custom Components
 */
//import AuthorizedRoute from './routes/AuthorizedRoute';
//import Login from './containers/login/LoginPage';
import Home from './routes/DashboardRoute';
//import HomePage from './containers/home/HomePage';
/**
 * Helpers
 */
import AuthenticationHelper from './helpers/AuthenticationHelper';
/**
 | Reducers
 */
import allReducers from './reducers';

/**
 | Constants
 */
const isDevelopmentMode = (process.env.NODE_ENV !== 'production');

/**
 | Stylesheets
 */
require('../assets/style/style.less');

/**
 | Logger
 */

/**
 | History
 */
const history = createBrowserHistory();

/**
 | Middleware
 */
const middleware = routerMiddleware(history);

/**
 | Store
 */
let store = null;
if (isDevelopmentMode) {
    store = createStore(
        allReducers,
        applyMiddleware(middleware, thunk),
    );
} else {
    store = createStore(
        allReducers,
        applyMiddleware(middleware, thunk),
    );
}

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

/**
 * Auth Check
 * requireAuth could not be used for '/login' path because a route has to be defined for all paths
 * requireAuth uses './login' redirect hence added a Route for '/login' in beforeLogin
 */
function requireAuth() {
    let route = (<Redirect to="/login" />);

    if (AuthenticationHelper.isAuthenticated()) {
        route = (<Redirect to="/dashboard" />);
    }

    return route;
}

/**
 * Before Login
 * requireAuth could not be used for '/login' path because a route has to be defined for all paths
 * requireAuth uses './login' redirect hence added a Route for '/login' in beforeLogin
 */
function beforeLogin() {
    //let route = null;
    let route = (<Route path="/Home" component={Home} />);
    //<Route path="/login" component={Login} />

    /*if (AuthenticationHelper.isAuthenticated()) {
        route = (<Redirect to="/dashboard" />);
    }*/

    return route;
}

/**
 | Render
 */
ReactDOM.render(
    <Provider store={store}>
        { /* ConnectedRouter will use the store from Provider automatically */ }
        <ConnectedRouter history={history}>
            <BrowserRouter basename="admin">
                <Switch>
                    <Route path="/Home" render={beforeLogin} />
                </Switch>
            </BrowserRouter>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);
