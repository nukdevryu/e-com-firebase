import { Button, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useReducer } from 'react'

const initialState = {
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: '',
    registerName: '',

    loginEmail: '',
    loginPassword: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ONCHANGE':
            const newState = state
            newState[action.payload.name] = action.payload.value
            return {...newState}
    
        default:
            return state
    }
}

const Login = () => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const handleInputChange = e => {
        dispatch({type: 'ONCHANGE', payload: {name: e.target.name, value: e.target.value}})
    }
    return (
        <Container maxWidth='lg'>
            <Typography>{JSON.stringify(state)}</Typography>
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
                                <form>
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
                                            <Button type='submit' variant='contained' fullWidth>Register</Button>
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
