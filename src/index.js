import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import trunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import reducers from './reducer';
import './config';
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';
import './index.css';
import EmployerInfo from './container/bossinfo/bossinfo';
import EmployeeInfo from './container/employeeinfo/employeeinfo';
import Dashboard from './component/dashboard/dashboard';

const store = createStore(reducers, compose(
    applyMiddleware(trunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
))
//employer employee mes me => four pages
ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Switch>
                    <Route path='/employeeinfo' component={EmployeeInfo}></Route>
                    <Route path='/employerinfo' component={EmployerInfo}></Route> 
                    <Route path='/login' component={Login}></Route>
                    <Route path='/register' component={Register}></Route>
                    <Route component={Dashboard}></Route>
                </Switch>
            </div>
        </BrowserRouter>   
    </Provider>),
    document.getElementById('root')
);

