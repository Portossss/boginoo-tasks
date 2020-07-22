import React from 'react';
import { HomeDefault, Login, Signup, Shortened } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import { Forgotpass } from './pages/forgotpass';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <HomeDefault />
                </Route>
                <Route path="/forgotpass" exact>
                    <Forgotpass />
                </Route>
                <Route path="/shortened" exact>
                    <Shortened />
                </Route>
                <Route path="/login" exact>
                    <Login />
                </Route>
                <Route path="/register" exact>
                    <Signup />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;