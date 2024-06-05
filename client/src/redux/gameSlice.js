// gameSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dice: [0, 0], // Initial dice values
    total: 0, // Sum of dice values
    result: '', // Game result (win/lose)
};

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setDiceResult: (state, action) => {
            state.dice = action.payload.dice;
            state.total = action.payload.total;
        },
        setGameResult: (state, action) => {
            state.result = action.payload;
        },
    },
});

export const { setDiceResult, setGameResult } = gameSlice.actions;

export default gameSlice.reducer;
