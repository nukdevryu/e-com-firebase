import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <Container maxWidth='xl' style={{marginBottom: '5%'}}>
            <Paper>
            <Grid container>
                <Grid item xs={2}>
                    <Link to='/'>Show Products</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to='/user'>User</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to='/cart'>Cart</Link>
                </Grid>
                <Grid item xs={2}>
                    <Link to='/login'>Login</Link>
                </Grid>
            </Grid>
        </Paper>
        </Container>
    )
}

export default Header
