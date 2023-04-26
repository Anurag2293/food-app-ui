import React from 'react'
import Paper from '@mui/material/Paper'
import Hero from '../components/Hero'
import Categories from '../components/Categories'

const Home = () => {
    return (
        <>
            <Paper
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                }}
            >
                <Hero />
                <Categories />
            </Paper>
        </>
    )
}

export default Home