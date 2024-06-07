import React from 'react';

const DiceResult = ({ die1, die2, total }) => {
    if (die1 === null || die2 === null) return null;

    // Placeholder images for dice
    const diceImage1 = '/dice.png'; // Placeholder URL for die 1
    const diceImage2 = '/dice.png'; // Placeholder URL for die 2

    return (
        <div className="p-4 bg-[#c2c2d6] rounded-lg shadow-lg mt-5">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center items-center flex-col">
                    <img src={diceImage1} alt="Die 1" style={{ maxWidth: '50%', borderRadius: '8px' }} />
                    <span className="font-semibold text-red-600 mt-2">{die1}</span>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <img src={diceImage2} alt="Die 2" style={{ maxWidth: '50%', borderRadius: '8px' }} />
                    <span className="font-semibold text-red-600 mt-2">{die2}</span>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <span className="font-semibold text-red-600">Total: {total}</span>
                </div>
            </div>
        </div>
    );
};

export default DiceResult;
