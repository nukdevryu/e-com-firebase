import { Button, Container, Grid, TextField } from '@mui/material'
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Redirect } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext'

const User = () => {
    const { userLogout, updateUser, ...state } = useContext(UserContext).userMethods
    const { addProduct } = useContext(ProductContext).productMethods

    const onUpdateuserSubmit = e => {
        e.preventDefault()
        updateUser({photoURL: e.target[0].value, displayName: e.target[2].value})
    }

    if (!state.isLogin)
        return <Redirect to='/login' />

    return (
        <Container>
            <img src={state.user.photoURL} width={'200px'} />
            <Grid item xs={12}>
                <form onSubmit={e => onUpdateuserSubmit(e)}>
                    <TextField
                        label="uri"
                    />
                    <TextField
                        label="name"
                    />
                    <Button
                        variant='contained'
                        color='info'
                        type='submit'
                    >Update User</Button>
                </form>
            </Grid>
            <Button
                variant='contained'
                color='error'
                onClick={() => userLogout()}
            >Logout</Button>
            <Button
                variant='contained'
                color='success'
                onClick={() => addProduct()}
            >Add Product</Button>
        </Container>
    )
}

export default User
