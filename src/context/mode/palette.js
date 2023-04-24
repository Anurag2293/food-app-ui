export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    main: '#fff'
                },
                divider: '#673AB7'
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
            }),
    },
});