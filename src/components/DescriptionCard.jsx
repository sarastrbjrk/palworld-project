import React from 'react';

const DescriptionCard = ({ description, onClick, isMatched, isSelected }) => {
    return (
        <div 
            className={`description-card ${isMatched ? 'matched' : ''} ${isSelected ? 'selected' : ''}`} 
            onClick={onClick}
        >
            <p>{description}</p>
        </div>
    );
};

export default DescriptionCard;
