import { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Private = ({component: Component, ...rest}) => {
    const { isLogin } = useContext(UserContext).userMethods
    return (
        <Route {...rest} render={
            props => isLogin ?
            <Component {...props} /> : <Redirect to="/login" />
        }/>
    )
}

export default Private
