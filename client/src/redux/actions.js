// actions.js

import axios from 'axios';
import { setDiceResult, setGameResult } from './gameSlice';

export const rollDice = (betAmount, betType) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/roll-dice', {
            betAmount,
            betType,
        });

        const { dice, total, result, playerPoints } = response.data;

        dispatch(setDiceResult({ dice, total }));
        dispatch(setGameResult(result));
    } catch (error) {
        console.error('Error rolling dice:', error);
    }
};

export const fetchPoints = () => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/points');
        const { playerPoints } = response.data;
        dispatch(setPoints(playerPoints));
    } catch (error) {
        console.error('Error fetching points:', error);
    }
};
