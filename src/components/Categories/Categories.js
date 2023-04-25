import React from 'react'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ScrollView from './ScrollView'

import biryani from './assets/images/biryani.jpg';
import cake from './assets/images/cake.jpg';
import chaat from './assets/images/chaat.jpg';
import chicken from './assets/images/chicken.jpg';
import chinese from './assets/images/chinese.jpg';
import desserts from './assets/images/desserts.jpg';
import nonVeg from './assets/images/non-veg.jpg';
import panner from './assets/images/paneer.jpg';
import southIndian from './assets/images/south-indian.jpg';

const Categories = () => {
    const foodItems = [
        {title: 'Biryani', imageSrc: biryani},
        {title: 'Cake', imageSrc: cake},
        {title: 'Chaat', imageSrc: chaat},
        {title: 'Chicken', imageSrc: chicken},
        {title: 'Chinese', imageSrc: chinese},
        {title: 'Desserts', imageSrc: desserts},
        {title: 'Non Veg', imageSrc: nonVeg},
        {title: 'Paneer', imageSrc: panner},
        {title: 'South Indian', imageSrc: southIndian},
    ]

    return (
        <Box
            variant='h3'
            sx={{
                width: '80%',
                mt: '1rem'
            }}
        >
            <Typography variant='h4' sx={{ textAlign: 'center', fontWeight: '600'}}>
                All Categories
            </Typography>
            <ScrollView foodItems={foodItems} />
        </Box>
    )
}

export default Categories