import { Injectable } from '@angular/core';
import { CardData } from '../components/card/card.component';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private cardTitles = [
        'Total Users',
        'Revenue',
        'Orders',
        'Products',
        'Page Views',
        'Engagement',
        'Downloads',
        'Subscriptions'
    ];

    private icons = ['📊', '💰', '🛒', '📦', '👁️', '⭐', '⬇️', '💳'];
    private descriptions = [
        'Active users this month',
        'Total revenue generated',
        'Orders completed',
        'Active products',
        'Total page views',
        'User engagement rate',
        'Total downloads',
        'Active subscriptions'
    ];

    private colors = [
        'border-blue-500',
        'border-green-500',
        'border-red-500',
        'border-purple-500',
        'border-yellow-500',
        'border-pink-500',
        'border-indigo-500',
        'border-teal-500'
    ];

    constructor() { }

    getRandomCards(): CardData[] {
        const cards: CardData[] = [];
        const numCards = 8;

        for (let i = 0; i < numCards; i++) {
            cards.push({
                title: this.cardTitles[i],
                icon: this.icons[i],
                value: this.getRandomValue(),
                description: this.descriptions[i],
                color: this.colors[i]
            });
        }

        return cards;
    }

    private getRandomValue(): string {
        const randomNum = Math.floor(Math.random() * 100000);

        if (randomNum > 10000) {
            return (randomNum / 1000).toFixed(1) + 'K';
        } else if (randomNum > 1000) {
            return (randomNum / 1000).toFixed(1) + 'K';
        } else {
            return randomNum.toString();
        }
    }
}
