const express = require('express');
const router = express.Router();

let playerPoints = 5000;

const getRandomNumber = () => Math.floor(Math.random() * 6) + 1;

router.post('/roll', (req, res) => {
    const { betAmount, betType } = req.body;

    if (![100, 200, 500].includes(betAmount)) {
        return res.status(400).json({ error: 'Invalid bet amount' });
    }

    const die1 = getRandomNumber();
    const die2 = getRandomNumber();
    const total = die1 + die2;

    let payout = 0;
    if ((betType === '7up' && total > 7) || (betType === '7down' && total < 7)) {
        payout = betAmount * 2;
    } else if (betType === 'lucky7' && total === 7) {
        payout = betAmount * 5;
    } else {
        payout = -betAmount;
    }

    playerPoints += payout;

    res.json({
        die1,
        die2,
        total,
        payout,
        playerPoints
    });
});

router.get('/points', (req, res) => {
    res.json({ playerPoints });
});

module.exports = router;
