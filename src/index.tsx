import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import { Provider } from 'react-redux';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Penl from '@component/penl';
import App from './app';
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route exact path="/layout" component={App} />
                <Route exact path="/layout/penl" component={Penl} />
                <Redirect to="/layout" />

            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
