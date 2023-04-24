import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import UtilityBar from './UtilityBar';
import { Paper } from '@mui/material';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 2),
        width: '18rem',
        backgroundColor: '#D7D7D7',
        borderRadius: '10px',
        '&::placeholder': {
            color: 'grey',
            fontSize: '12px'
        }
    },
}));

export default function Navbar() {
    return (
        <>
        <UtilityBar />
        <Paper elevation={8} sx={{ 
            flexGrow: 1,
            boxShadow: '1rem'
        }}>
            <AppBar position="static" sx={{ px: '10%' }}>
                <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography
                        variant="h2"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, 
                            display: { xs: 'none', sm: 'block' }, 
                            color: '#673AB7', 
                            fontWeight: '800'
                        }}
                    >
                        Food.com
                    </Typography>
                    <StyledInputBase
                        placeholder="Search items here ..."
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Toolbar>
            </AppBar>
        </Paper>
        </>
    );
}
