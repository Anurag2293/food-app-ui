import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material'

function Item(props)
{
    return (
        <Paper
            sx={{ bgcolor: 'red', height: '40vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
        >
            <Typography variant='h2'>{props.item.name}</Typography>
            <Typography>{props.item.description}</Typography>

            <Button variant='contained' className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

const Hero = () => {

    const items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Paper
            sx={{
                width: '80%',
                mx: 'auto',
                bgcolor: 'red',
                borderRadius: '40px'
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