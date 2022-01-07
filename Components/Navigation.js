import React from 'react';
import Analyzing from '../SVGs/analyzing.svg';
import Edit from '../SVGs/edit.svg';
import Golf from '../SVGs/golf.svg';
import Increase from '../SVGs/increase.svg';
import '../Styles/Navigation.css';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Dashboard from './Dashboard';
import AddRound from './AddRound';


const Navigation = () => {
    return (
        <Router>
            <div className="navigation">
                <div className="imageWrapper">
                    <Link to="/" ><div className="box"></div></Link>
                    <Link to="/AddRound"><div className="box"></div></Link>
                    <Link to="/analyzing"><div className="box"></div></Link>
                    <Link to="/improve"><div className="box"></div></Link>
                </div>
            </div>
            <Switch>
                <Route path="/">
                    <Dashboard />
                </Route>
                <Route path="/AddRound">
                    <AddRound />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navigation;