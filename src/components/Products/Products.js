import React from 'react'

import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import ProductCard from './ProductCard';

import pdt1 from './assets/images/pdt1.avif'
import pdt2 from './assets/images/pdt2.avif'
import pdt3 from './assets/images/pdt3.avif'
import pdt4 from './assets/images/pdt4.avif'
import pdt5 from './assets/images/pdt5.avif'
import pdt6 from './assets/images/pdt6.avif'
import pdt7 from './assets/images/pdt7.avif'
import pdt8 from './assets/images/pdt8.avif'

const Products = () => {
    const offerProducts = [
        { title: 'Title 1', imageSrc: pdt1, price: 200, types: 'North Indian, Pizza, Pasta'},
        { title: 'Title 2', imageSrc: pdt2, price: 250, types: 'North Indian, Pizza, Pasta'},
        { title: 'Title 3', imageSrc: pdt3, price: 80, types: 'North Indian, Mughlai, Pasta'},
        { title: 'Title 4', imageSrc: pdt4, price: 90, types: 'North Indian, Pizza, Pasta'},
        { title: 'Title 5', imageSrc: pdt5, price: 100, types: 'North Indian, Pizza, Pasta'},
        { title: 'Title 6', imageSrc: pdt6, price: 400, types: 'North Indian, Sweet, Pasta'},
        { title: 'Title 7', imageSrc: pdt7, price: 300, types: 'Italian, Pizza, Pasta'},
        { title: 'Title 8', imageSrc: pdt8, price: 330, types: 'Chinese, Continental, Fast Food'},
    ]

    return (
        <Paper
            elevation={0}
            sx={{ width: '80%'}}
        >
            <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: '600'}}>
                Offer Products 
            </Typography>
            <Box sx={{ flexGrow: 1, mt: '1rem'}}>
                <Grid container spacing={4}>
                    {offerProducts.map((product) => (
                        <Grid item xs={6} md={3}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Paper>
    )
}

export default Products