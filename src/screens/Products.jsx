import React, { useContext } from "react"
import { ProductContext } from "../context/ProductContext"
import { Container, Grid, IconButton, Paper, TextField, Typography } from "@mui/material"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import UpgradeIcon from '@mui/icons-material/Upgrade'

const Products = () => {

    const { products, deleteProduct, updateProduct } = useContext(ProductContext).productMethods

    const updateProductData = (evt, productId) => {
        evt.preventDefault()
        const dataProduct = {
            productId,
            name: evt.target[0].value,
            price: evt.target[2].value,
            quantity: evt.target[4].value,
            type: evt.target[6].value
        }
        updateProduct(dataProduct)
    }


    return (
        <Container>
            <Paper>
                <Grid container rowSpacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h4">Products</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Container>
                            <Grid container rowSpacing={1}>
                                {
                                    products && products.map((product, index) => (
                                        <Grid item xs={12} key={index}>
                                            <Grid container rowSpacing={2}>
                                                <Paper elevation={5}>
                                                    <form onSubmit={evt => updateProductData(evt, product.id)}>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                name='name'
                                                                defaultValue={product.data().name}
                                                                variant='outlined'
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                name='price'
                                                                defaultValue={product.data().price}
                                                                variant='outlined'
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                name='quantity'
                                                                defaultValue={product.data().quantity}
                                                                variant='outlined'
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <TextField
                                                                name='type'
                                                                defaultValue={product.data().type}
                                                                variant='outlined'
                                                            />
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <IconButton onClick={() => deleteProduct(product.id)}>
                                                                <DeleteForeverIcon />
                                                            </IconButton>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <IconButton type="submit">
                                                                <UpgradeIcon />
                                                            </IconButton>
                                                        </Grid>
                                                    </form>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Products
