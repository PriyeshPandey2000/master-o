import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const BetForm = ({ betAmount, betType, setBetAmount, setBetType }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Bet Amount</InputLabel>
                    <Select
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                    >
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={200}>200</MenuItem>
                        <MenuItem value={500}>500</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Bet Type</InputLabel>
                    <Select
                        value={betType}
                        onChange={(e) => setBetType(e.target.value)}
                    >
                        <MenuItem value={'7up'}>7 Up</MenuItem>
                        <MenuItem value={'7down'}>7 Down</MenuItem>
                        <MenuItem value={'lucky7'}>Lucky 7</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export default BetForm;
