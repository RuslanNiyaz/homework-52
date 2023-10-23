import Card from './Card';

class CardDeck {
    private readonly ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    private readonly suits = ['diams', 'hearts', 'clubs', 'spades'];
    public deck: Card[] = [];

    constructor() {
        this.suits.forEach(suit => {
            this.ranks.forEach(rank => {
                const card = new Card(rank, suit);
                this.deck.push(card);
            });
        });
    };

    getCard(): Card {
        const randomCardIndex: number = Math.floor(Math.random() * this.deck.length);
        const randomCardObject = this.deck[randomCardIndex];
        this.deck.splice(randomCardIndex, 1);
        return randomCardObject;
    };

    getCards(howMany: number): Card[] {
        let randomCardsDeck: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            const ranDeck = this.getCard();
            randomCardsDeck.push(ranDeck);
        }
        return randomCardsDeck;
    }
}

export default CardDeck;
