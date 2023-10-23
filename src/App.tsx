import './App.css';
import React, {useState} from 'react';
import CardView from "./CardView";
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import PokerHand from './lib/PokerHand';
import './cards.css';

const App: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);

    const pokerHand = new PokerHand(cards);
    let pokerHandText: string = pokerHand.getOutcome();

    const getCards = () => {
        const cardDeck = new CardDeck();
        const newCards = cardDeck.getCards(5);
        setCards(newCards);
    };

    if (cards.length === 0) {
        return (
            <div>
                <button className="start-btn" onClick={getCards}>Dealing cards</button>
                <p className="title-state">No Cards</p>
            </div>
        );
    }

    return (
        <div className="App">
            <div className="cards">
                {cards.map((card) => (
                    <CardView key={card.rank + card.suit} rank={card.rank} suit={card.suit}/>
                ))}
            </div>
            <button className="start-btn" onClick={getCards}>Dealing cards</button>
            <p><strong>{pokerHandText}</strong></p>
        </div>
    );
};

export default App;
