import React from 'react'
import Paper from '@mui/material/Paper'
import Hero from '../components/Hero'

const Home = () => {
    return (
        <>
            <Paper
                sx={{
                    width: '100%',
                    height: '100vh',
                    py: '1rem'
                }}
            >
                <Hero />
            </Paper>
        </>
    )
}

export default Home