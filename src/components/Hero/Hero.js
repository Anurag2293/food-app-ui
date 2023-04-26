import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Typography } from '@mui/material'

import backgroundOne from './assets/background1.avif';
import backgroundTwo from './assets/background-2.jpg';

function Item(props)
{
    return (
        <Paper
            elevation={0}
            sx={{ 
                width: '100%',
                height: '40vw', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'center',
                background: `url(${props.item.imageSrc})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <Typography variant='h1' 
                sx={{
                    fontWeight: '900',
                    color: '#fff'
                }}
            >{props.item.name}</Typography>
            <Typography variant='h5'
                sx={{ 
                    color: '#fff',
                    fontFamily: `Okra, Helvetica, sans-serif`
                }}
            >{props.item.description}</Typography>
        </Paper>
    )
}

const Hero = () => {

    const items = [
        {
            name: "Food.com",
            description: "Find the best restaurants, cafes and bars in India!",
            imageSrc: backgroundOne
        },
        // {
        //     name: "Instant Delivery",
        //     description: "Get items delivered in record time!",
        //     imageSrc: backgroundTwo
        // }
    ]

    return (
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                borderRadius: 0,
                p: 0,
                m: 0
            }}
        >

            <Carousel
                animation='slide'
                duration={500}
                indicatorContainerProps={{
                    style: {
                        display: 'none'
                    }
                }}
            >
                {items.map( (item, i) => 
                    <Item key={i} item={item} /> 
                )}
            </Carousel>
        </Paper>
    )
}

export default Hero