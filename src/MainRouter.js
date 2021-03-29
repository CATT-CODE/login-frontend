import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import SignUp from "./component/SignUp/SignUp";
import Login from "./component/Login/Login";

export default function MainRouter(props) {
        console.log(props);
    return (
        <Router>
            <Navbar user={props.user} />
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/sign-up" component={SignUp}/>
                <Route path="/login" render={(routerProps) => (
                    <Login {...routerProps} handleUserLogin={props.handleUserLogin} />
                  )}
                />
            </Switch>
        </Router>
    )
}
