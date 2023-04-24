import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { getDesignTokens } from './palette';

export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export const ColorModeState = (props) => {
    const [mode, setMode] = React.useState('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    // Update the theme only if the mode changes
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {props.children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}