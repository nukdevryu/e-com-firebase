import { Button, Container } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Redirect } from 'react-router-dom';

const User = () => {
    const { userLogout, updateUser, ...state } = useContext(UserContext).userMethods

    if(!state.isLogin)
        return <Redirect to='/login' />

    return (
        <Container>
            <img src={state.user.photoURL} />
            <Button
                variant='contained'
                color='error'
                onClick={() => userLogout()}
            >Logout</Button>
            <Button
                variant='contained'
                color='info'
                onClick={() => updateUser()}
            >Logout</Button>
        </Container>
    )
}

export default User
