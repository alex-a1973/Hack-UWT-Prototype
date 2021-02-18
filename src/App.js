import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Apply from './components/Apply';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/apply'>
                    <Apply/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;