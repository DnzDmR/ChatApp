import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login';
import Home from './pages/Home';
import LoginController from './controller/LoginController';
import * as serviceWorker from './serviceWorker';
import {Switch, Redirect, Route,BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>
            <Route exact path="/home">
                { LoginController.isExpired() ? <Home /> : <Redirect to="/login" />} 
            </Route>
            <Route path="/profile">
                </Route>
            <Route path="*">
                { LoginController.isExpired() ? <Redirect to="/home" /> : <Redirect to="/login" />}
            </Route>
        </Switch>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
