import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar"

export default function MainRouter() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/home" component={Home}/>
            </Switch>
        </Router>
    )
}
