import { createSlice } from '@reduxjs/toolkit';

export const betSlice = createSlice({
    name: 'bet',
    initialState: {
        amount: 100,
        type: '7up',
    },
    reducers: {
        setBetAmount: (state, action) => {
            state.amount = action.payload;
        },
        setBetType: (state, action) => {
            state.type = action.payload;
        },
    },
});

export const { setBetAmount, setBetType } = betSlice.actions;

export default betSlice.reducer;
