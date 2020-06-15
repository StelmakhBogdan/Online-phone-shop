import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {render} from 'react-dom';
import {composeWithDevTools} from 'redux-devtools-extension';
import {createBrowserHistory} from 'history';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'connected-react-router';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';

import './main.css';

import createRootReducer from 'redux/reducers';
import routes from 'routes/routes';


const history = createBrowserHistory();
const middlewares = [thunk, routerMiddleware(history)];
const store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middlewares))
);

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);