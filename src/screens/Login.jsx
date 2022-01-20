import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/UserContext';



const Login = () => {
    const { userRegister, ...state } = useContext(UserContext).userMethods
    const [textInput, setTextInput] = useState({
        registerEmail: '',
        registerPassword: '',
        registerConfirmPassword: '',
        registerName: '',

        loginEmail: '',
        loginPassword: ''
    })


    const handleInputChange = e => {
        console.log(`${e.target.name}, ${e.target.value}`);
        let newState = textInput
        newState[e.target.name] = e.target.value
        setTextInput({ ...newState })
    }

    const login = () => { }

    const register = async (e) => {
        e.preventDefault()
        const date = { email: textInput.registerEmail, password: textInput.registerPassword }
        if (textInput.registerPassword === textInput.registerConfirmPassword)
            userRegister(date)
        else
            console.log('password and confirm password is not match')
    }
    console.log(state.isLogin)
    if(state.isLogin)
        return <Redirect to='/' />

    return (
        <Container maxWidth='lg'>
            {/* <Typography>{JSON.stringify(textInput)}</Typography> */}
            <Grid container>
                <Grid item xs={6}>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h6'>Login</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Container>
                                <form>
                                    <Grid container rowSpacing={1}>
                                        <Grid item xs={12}>
                                            <TextField
                                                name='loginEmail'
                                                label="E-mail"
                                                type="email"
                                                variant="outlined"
                                                size='small'
                                                onChange={e => handleInputChange(e)}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                name='loginPassword'
                                                label="Password"
                                                type="password"
                                                variant="outlined"
                                                size='small'
                                                onChange={e => handleInputChange(e)}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                variant='contained'
                                                type='submit'
                                                fullWidth
                                            >Login</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container rowSpacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h6'>Register</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Container>
                                <form onSubmit={e => register(e)}>
                                    <Grid container rowSpacing={1}>
                                        <Grid item xs={12}>
                                            <TextField
                                                name='registerEmail'
                                                label="E-mail"
                                                type="email"
                                                variant="outlined"
                                                size='small'
                                                onChange={e => handleInputChange(e)}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                name='registerPassword'
                                                label="Password"
                                                type="password"
                                                variant="outlined"
                                                size='small'
                                                onChange={e => handleInputChange(e)}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                name='registerConfirmPassword'
                                                label="Confirm Password"
                                                type="password"
                                                variant="outlined"
                                                size='small'
                                                onChange={e => handleInputChange(e)}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                name='registerName'
                                                label="Name"
                                                type="text"
                                                variant="outlined"
                                                size='small'
                                                onChange={e => handleInputChange(e)}
                                                required
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type='submit'
                                                variant='contained'
                                                fullWidth
                                            >Register</Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Container>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}


export default Login
