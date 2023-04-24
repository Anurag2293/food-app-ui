import * as React from 'react';

import { amber, grey, deepOrange, red } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

    const getDesignTokens = (mode) => ({
        palette: {
            mode,
            ...(mode === 'light'
                ? {
                    // palette values for light mode
                    primary: {
                        main: '#fff'
                    },
                    divider: '#673AB7',
                    text: {
                        primary: '#000',
                        secondary: grey[800],
                    },
                }
                : {
                    // palette values for dark mode
                    primary: {
                        main: '#000'
                    },
                    divider: '#673AB7',
                    background: {
                        default: '#202020'
                    },
                    text: {
                        primary: '#fff',
                        secondary: grey[500],
                    },
                }),
        },
    });


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