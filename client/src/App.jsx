import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

        // Dismiss any existing toast
        toast.dismiss();

        if (result.data.total === 7) {
            if (betType === 'lucky7') {
                toast.info("Lucky 7! You won 5 times your stake!", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    style: {
                        background: "#FFD700",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }
                });
            } else {
                toast.error("Sorry! You lost your stake!", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    style: {
                        background: "#FFCCCB",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }
                });
            }
        } else {
            if ((result.data.total < 7 && betType === '7down') ||
                (result.data.total > 7 && betType === '7up')) {
                toast.success("Congratulations! You won double your stake!", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    style: {
                        background: "#C7F6C7",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }
                });
            } else {
                toast.error("Sorry! You lost your stake!", {
                    position: "bottom-center",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    style: {
                        background: "#FFCCCB",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                    }
                });
            }
        }
    };

    return (
        <div className="app-container">
            <Container className="content-container mt-8">
                <Typography variant="h4" gutterBottom className="game-title" style={{ color: 'purple' }}>7 Up 7 Down Game</Typography>
                <PointsDisplay points={playerPoints} />
                <div className="mt-8"></div>
                <BetForm 
                    betAmount={betAmount}
                    betType={betType}
                    setBetAmount={setBetAmount}
                    setBetType={setBetType}
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleRollDice} 
                    className="roll-button"
                >
                    Roll Dice
                </Button>
                <DiceResult die1={die1} die2={die2} total={total} />
                <ToastContainer />
            </Container>
        </div>
    );
};

export default App;
