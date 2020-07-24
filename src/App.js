import React from 'react';
import { HomeDefault, Login, Signup, Shortened, Forgotpass } from './pages';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './style/main.scss';
import {Context} from './components/provider'

const App = () => {
    return (
        <Context.Provider>
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
        </Context.Provider>
    )
}

export default App;