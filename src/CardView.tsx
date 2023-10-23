import React from 'react';

interface CardViewProps {
    rank: string;
    suit: string;
}

const CardView: React.FC<CardViewProps> = ({ rank, suit }) => {
    const suitSymbols: { [key: string]: string } = {
        diams: '♦',
        clubs: '♣',
        hearts: '♥',
        spades: '♠',
    };

    const cardClasses = `card rank-${rank.toLowerCase()} ${suit}`;
    const icon = suitSymbols[suit];

    return (
        <div className="playingCards faceImages">
        <span className={cardClasses}>
        <span className="rank">{rank}</span>
            <span className="suit">{icon}</span>
        </span>
        </div>
);
};
export default CardView;
