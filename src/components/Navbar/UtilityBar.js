import * as React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';

import { useTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../context/mode';

export const UtilityBar = () => {
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

export default UtilityBar