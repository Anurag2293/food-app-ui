import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../context/mode/ColorModeState';

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

function UtilityBar() {
	const theme = useTheme();
	const colorMode = React.useContext(ColorModeContext);
	return (
        <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', px: '13%', bgcolor: '#673AB7', py: 0}}
        >
                <Typography color={'#ffffff'}>Dark Mode</Typography>
                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                    {theme.palette.mode === 'dark' ? <ToggleOnIcon fontSize='large'/> : <ToggleOffIcon fontSize='large' />}
                </IconButton>
        </Box>
	);
}

export default function Navbar() {
    return (
        <>
        <UtilityBar />
        <Box sx={{ 
            flexGrow: 1, 
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
        </Box>
        </>
    );
}
