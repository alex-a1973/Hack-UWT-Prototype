import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Apply from './components/Apply';
import Registrants from './components/Registrants';
import Logins from './components/Logins';
import Teams from './components/Teams';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/apply'>
                    <Apply/>
                </Route>
                <Route exact path='/registrants'>
                    <Registrants/>
                </Route>
                <Route exact path='/logins'>
                    <Logins/>
                </Route>
                <Route exact path='/teams'>
                    <Teams/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;