import { configureStore } from '@reduxjs/toolkit';
import pointsReducer from './pointsSlice';
import betReducer from './betSlice';

export const store = configureStore({
    reducer: {
        points: pointsReducer,
        bet: betReducer
    },
});
