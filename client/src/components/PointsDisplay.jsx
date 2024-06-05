import React from 'react';
import { Typography } from '@mui/material';

const PointsDisplay = ({ points }) => {
    return (
        <Typography variant="h6" gutterBottom>
            Current Points: {points}
        </Typography>
    );
};

export default PointsDisplay;
