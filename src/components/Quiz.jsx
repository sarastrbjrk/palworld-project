import React, { useState, useEffect } from 'react';
import { pals } from '../pals.jsx';
import PalCard from './Palcard.jsx';
import DescriptionCard from './DescriptionCard.jsx';
import '../styles/Quiz.css'; 

export function Quiz() {
    const [shuffledDescriptions, setShuffledDescriptions] = useState([]);
    const [selectedPal, setSelectedPal] = useState(null);
    const [selectedDescription, setSelectedDescription] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState({});

    useEffect(() => {
        // shuffle descriptions
        const descriptions = Object.values(pals).sort(() => Math.random() - 0.5);
        setShuffledDescriptions(descriptions);
    }, []);

    const handlePalClick = (pal) => {
        setSelectedPal(pal);
    };

    const handleDescriptionClick = (description) => {
        setSelectedDescription(description);
    };

    // match pal and description and alert
    const handleMatch = () => {
        if (selectedPal && selectedDescription) {
            if (pals[selectedPal] === selectedDescription) {
                setMatchedPairs({ ...matchedPairs, [selectedPal]: true });
                alert('Correct!');
            } else {
                alert('Try again!');
            }
            // Reset selections
            setSelectedPal(null);
            setSelectedDescription(null);
        } else {
            alert('Please select both a Pal and a description.');
        }
    };

    // reset all values
    const handleReset = () => {
        setShuffledDescriptions(Object.values(pals).sort(() => Math.random() - 0.5));
        setSelectedPal(null);
        setSelectedDescription(null);
        setMatchedPairs({});
    };

    return (
        <div className="quiz-container">
            <div className="buttons">
                <button className="match-button" onClick={handleMatch}>Match</button>
                <button className="reset-button" onClick={handleReset}>Reset</button> {/* Add reset button */}
            </div>
            <div className="quiz">
                <div className="pals-container">
                    {Object.keys(pals).map((pal) => (
                        <PalCard
                            key={pal}
                            name={pal}
                            onClick={() => handlePalClick(pal)}
                            isMatched={matchedPairs[pal]}
                            isSelected={selectedPal === pal}
                        />
                    ))}
                </div>
                <div className="descriptions-container">
                    {shuffledDescriptions.map((description, index) => (
                        <DescriptionCard
                            key={index}
                            description={description}
                            onClick={() => handleDescriptionClick(description)}
                            isMatched={Object.values(pals).indexOf(description) !== -1 && matchedPairs[Object.keys(pals)[Object.values(pals).indexOf(description)]]}
                            isSelected={selectedDescription === description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
