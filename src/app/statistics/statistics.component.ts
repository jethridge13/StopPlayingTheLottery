import { Component, OnInit } from '@angular/core';

import { StatsSharingService } from '../stats-sharing.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  wins = 0;
  totalRounds = 0;
  jackpots = 0;
  money = 0;

  constructor(private stats: StatsSharingService) {
    const _totalRoundsSubscription = stats.getTotalRoundsEvent().subscribe((rounds) => {
      this.totalRounds = rounds;
    });
    const _winsSubscription = stats.getWinsEvent().subscribe((wins) => {
      this.wins = wins;
    });
    const _moneySubscription = stats.getMoneyEvent().subscribe((money) => {
      this.money = money;
    });
  }

  ngOnInit() {
  }

}
