import { Avatar, Chip, Container, Grid, Paper, Stack, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header = () => {
    const { ...state } = useContext(UserContext).userMethods
    return (
        <Container maxWidth='xl' style={{ marginBottom: '5%' }}>
            <Paper>
                <Grid container justifyContent='space-between' textAlign='center'>
                    <Grid item xs={3}>
                        <Link to='/'>Products</Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/user'>User</Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to='/cart'>Cart</Link>
                    </Grid>
                    {
                        state.isLogin ?
                            <Grid item xs={3}>
                                <Stack direction="row" spacing={1}>
                                    <Chip
                                        avatar={<Avatar alt="Natacha" src={state.user.photoURL} />}
                                        label={state.user.displayName}
                                        variant="outlined"
                                    />
                                </Stack>
                            </Grid> :
                            <Grid item xs={3}>
                                <Link to='/login'>Login</Link>
                            </Grid>
                    }
                </Grid>
            </Paper>
        </Container>
    )
}

export default Header
