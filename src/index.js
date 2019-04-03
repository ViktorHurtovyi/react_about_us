import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Route, NavLink, BrowserRouter as Router, Switch,} from 'react-router-dom'
import Index from './components/Home/Index'
import Contact from './components/Contact/Contact'
import Skills from './components/Skills/Skills'
const routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={Index} />
        </Switch>
        <Switch>
            <Route exact path="/skills" component={Skills} />
        </Switch>
        <Switch>
            <Route exact path="/contact" component={Contact} />
        </Switch>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))