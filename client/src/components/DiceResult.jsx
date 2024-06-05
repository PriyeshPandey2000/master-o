import React from 'react';
import { Typography, Grid } from '@mui/material';

const DiceResult = ({ die1, die2, total }) => {
    if (die1 === null || die2 === null) return null;
    return (
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
            <Grid item xs={4}>
                <Typography variant="h5">Die 1: {die1}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5">Die 2: {die2}</Typography>
            </Grid>
            <Grid item xs={4}>
                <Typography variant="h5">Total: {total}</Typography>
            </Grid>
        </Grid>
    );
};

export default DiceResult;
