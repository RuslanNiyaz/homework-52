import Card from './Card';

class PokerHand {
    constructor(public cards: Card[]) {
    }

    getOutcome() {
        const rankCount: { [rank: string]: number } = {};
        const suitCount: { [suit: string]: number } = {};

        this.cards.forEach(card => {
            rankCount[card.rank] = (rankCount[card.rank] || 0) + 1;
            suitCount[card.suit] = (suitCount[card.suit] || 0) + 1;
        });

        const cardCombinations = Object.keys(rankCount).length;

        if (cardCombinations === 2) {
            const rankCounts = Object.values(rankCount);
            if (rankCounts.includes(4)) return 'four of a kind';
        }

        const isFlush = Object.values(suitCount).some(count => count === 5);
        if (isFlush) return 'flush';
        if (cardCombinations === 3 && Object.values(rankCount).includes(3)) return 'three of a kind';
        if (cardCombinations === 3) return 'two pairs';
        if (cardCombinations === 4) return 'one pair';
        return 'high card';
    }
}

export default PokerHand;
