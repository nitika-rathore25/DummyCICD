import { Component, OnInit } from '@angular/core';
import { CardData } from '../card/card.component';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    cards: CardData[] = [];

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.loadDashboardData();
    }

    loadDashboardData(): void {
        this.cards = this.dataService.getRandomCards();
    }

    refreshData(): void {
        this.loadDashboardData();
    }
}
