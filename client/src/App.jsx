import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import BetForm from './components/BetForm';
import DiceResult from './components/DiceResult';
import PointsDisplay from './components/PointsDisplay';
import './App.css';

const App = () => {
    const [playerPoints, setPlayerPoints] = useState(5000);
    const [die1, setDie1] = useState(null);
    const [die2, setDie2] = useState(null);
    const [total, setTotal] = useState(null);
    const [betAmount, setBetAmount] = useState(100);
    const [betType, setBetType] = useState('7up');

    useEffect(() => {
        const fetchPoints = async () => {
            const result = await axios.get('http://localhost:5000/api/game/points');
            setPlayerPoints(result.data.playerPoints);
        };
        fetchPoints();
    }, []);

    const handleRollDice = async () => {
        const result = await axios.post('http://localhost:5000/api/game/roll', { betAmount, betType });
        setDie1(result.data.die1);
        setDie2(result.data.die2);
        setTotal(result.data.total);
        setPlayerPoints(result.data.playerPoints);
    };

    return (
        <Container className="App">
            <Typography variant="h4" gutterBottom>7 Up 7 Down Game</Typography>
            <PointsDisplay points={playerPoints} />
            <BetForm
                betAmount={betAmount}
                betType={betType}
                setBetAmount={setBetAmount}
                setBetType={setBetType}
            />
            <Button variant="contained" color="primary" onClick={handleRollDice}>Roll Dice</Button>
            <DiceResult die1={die1} die2={die2} total={total} />
        </Container>
    );
};

export default App;
