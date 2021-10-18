import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AddUser } from './components/AddUser'
import { EditUser } from './components/EditUser'
import { Home } from './components/Home'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
    return ( 
        <div style={{ maxWidth: "480px", margin: "64px auto"}}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/edit/:id" component={EditUser} />
                    <Route path="/add" component={AddUser} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
