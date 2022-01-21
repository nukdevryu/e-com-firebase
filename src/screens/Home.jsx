import { Container, Grid, Paper, Typography } from "@mui/material"
import React, { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

const Home = () => {
    const { products } = useContext(ProductContext).productMethods
    return (
        <Container>
            <Paper>
                <Grid container>
                    <Grid item xs={12}>
                        <Typography variant="h4">Home Page</Typography>
                    </Grid>
                    {
                        products && products.map((product, index) => (
                            <Grid item xs={12} key={index}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography variant="h4">product.name</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Paper>
        </Container>
    )
}

export default Home
