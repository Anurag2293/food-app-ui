import React from 'react'
import Paper from '@mui/material/Paper'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Products from '../components/Products'

const Home = () => {
    return (
        <>
            <Paper
                elevation={0}
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                }}
            >
                <Hero />
                <Categories />
                <Products />
            </Paper>
        </>
    )
}

export default Home