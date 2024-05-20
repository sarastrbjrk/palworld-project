import React from 'react';

const PalCard = ({ name, onClick, isMatched, isSelected }) => {
    return (
        <div 
            className={`pal-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`} 
            onClick={onClick}
        >
            <p>{name}</p>
        </div>
    );
};

export default PalCard;
