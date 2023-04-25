import { Paper, Typography } from "@mui/material";
import React from "react";


export function Card({ title, imageSrc, itemId}) {

    return (
        <Paper
            role="button"
            variant="button"
            elevation={0}
            tabIndex={0}
            className="card"
            sx={{
                my: '1rem',
                mx: '1rem',
                py: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                bgcolor: 'inherit',
                userSelect: 'none'
            }}
        >
            <img src={imageSrc} height={"150px"} width={"150px"} style={{ borderRadius: '150px'}} alt={title} />
            <Typography sx={{ mt: '1rem'}}>{title}</Typography>
        </Paper>
    );
}
