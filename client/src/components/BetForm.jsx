import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';

const BetForm = ({ betAmount, betType, setBetAmount, setBetType }) => {
    return (
        <Grid container spacing={3} className="p-4 ">
            <Grid item xs={12} sm={6} className="mb-4 sm:mb-0" style={{ marginBottom: '20px' }}>
                <FormControl fullWidth variant="outlined" style={{ backgroundColor: '#c2c2d6', borderRadius: '8px', border: '2px solid black' }}>
                    <InputLabel style={{ fontSize: '1.25rem', color: 'black',transform: 'translateY(-28px)' }}>Bet Amount</InputLabel>
                    <Select
                        value={betAmount}
                        onChange={(e) => setBetAmount(e.target.value)}
                        label="Bet Amount"
                        style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', outline: 'none', border: 'none', width: '100%',color: 'black' }}
                    >
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={200}>200</MenuItem>
                        <MenuItem value={500}>500</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            
            <Grid item xs={12} sm={6} style={{ marginTop: '15px' }}>
                <FormControl fullWidth variant="outlined" style={{ backgroundColor: '#c2c2d6', borderRadius: '8px', border: '2px solid black' }}>
                    <InputLabel style={{ fontSize: '1.25rem', color: 'black',transform: 'translateY(-30px)' }}>Bet Type</InputLabel>
                    <Select
                        value={betType}
                        onChange={(e) => setBetType(e.target.value)}
                        label="Bet Type"
                        style={{ boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)', outline: 'none', border: 'none', width: '100%',color: 'black' }}
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
