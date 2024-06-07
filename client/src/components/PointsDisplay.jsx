import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const PointsDisplay = ({ points }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Box className="p-4 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg shadow-lg mt-11">
                <Typography 
                    variant="h6" 
                    gutterBottom 
                    className="text-white font-semibold text-center "
                >
                    Current Points: {points}
                </Typography>
            </Box>
        </motion.div>
    );
};

export default PointsDisplay;
