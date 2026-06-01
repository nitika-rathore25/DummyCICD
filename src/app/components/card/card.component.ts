import { Component, Input } from '@angular/core';

export interface CardData {
    title: string;
    icon: string;
    value: string;
    description: string;
    color: string;
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent {
    @Input() cardData!: CardData;
}
