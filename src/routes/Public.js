import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import Login from '../screens/Login'
import Products from '../screens/Products'
import User from '../screens/User'
import Private from './Private'

const Public = () => {
    return (
        <Switch>
            <Route path='/' component={Products} exact />
            <Route path='/login' component={Login} exact />
            <Private component={User} />
            <Route path='*' component={() => <h4>404 not found</h4>} />
        </Switch>
    )
}

export default Public
