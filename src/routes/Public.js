import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'

const Public = () => {
    return (
        <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={Login} exact />
            <Route path='*' component={() => <h4>404 not found</h4>} />
        </Switch>
    )
}

export default Public
