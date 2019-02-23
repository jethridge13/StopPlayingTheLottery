import { Component, OnInit } from '@angular/core';

import { MaterialModule } from '../material.module';

import { PowerballService } from '../powerball.service';
import { StatsSharingService } from '../stats-sharing.service';

@Component({
  selector: 'app-powerball',
  templateUrl: './powerball.component.html',
  styleUrls: ['./powerball.component.scss']
})
export class PowerballComponent implements OnInit {
// TODO Money
  winningNumbers = [];
  playerNumbers = [];

  disableStart = false;
  disableStop = true;

  constructor(private powerball: PowerballService,
    private stats: StatsSharingService) {
    this.winningNumbers = powerball.generateNumbers();
    this.playerNumbers = powerball.generateNumbers();
  }

  async run() {
    while (this.disableStart) {
      this.winningNumbers = this.powerball.generateNumbers();
      this.playerNumbers = this.powerball.generateNumbers();
      this.stats.incrementRounds();
      this.stats.incrementMoney(-2);
      const win = this.powerball.compareForJackpot(this.winningNumbers, this.playerNumbers);
      if (win) {
        this.disableStart = false;
        this.disableStop = true;
        this.stats.incrementJackpots();
        this.stats.incrementMoney(40000000);
      } else {
        const moneyGained = this.powerball.compareForWin(this.winningNumbers, this.playerNumbers)
        if (moneyGained > 0) {
          this.stats.incrementWins();
          this.stats.incrementMoney(moneyGained);
        }
      }
      await this.sleep(1);
    }
  }

  start(): void {
    this.disableStart = true;
    this.disableStop = false;
    this.run();
  }

  stop(): void {
    this.disableStart = false;
    this.disableStop = true;
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {
  }

}
