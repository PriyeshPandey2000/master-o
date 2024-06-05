import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 5000, // Player starts with 5000 points
};

const pointsSlice = createSlice({
    name: 'points',
    initialState,
    reducers: {
        setPoints: (state, action) => {
            state.value = action.payload;
        },
        incrementPoints: (state, action) => {
            state.value += action.payload;
        },
        decrementPoints: (state, action) => {
            state.value -= action.payload;
        },
    },
});

export const { setPoints, incrementPoints, decrementPoints } = pointsSlice.actions;

export default pointsSlice.reducer;
