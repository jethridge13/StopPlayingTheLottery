import { Component, OnInit } from '@angular/core';

import { MaterialModule } from '../material.module';

import { PowerballService } from '../powerball.service';

@Component({
  selector: 'app-powerball',
  templateUrl: './powerball.component.html',
  styleUrls: ['./powerball.component.scss']
})
export class PowerballComponent implements OnInit {

  winningNumbers = [];
  playerNumbers = [];

  disableStart = false;
  disableStop = true;

  constructor(private powerball: PowerballService) {
    this.winningNumbers = powerball.generateNumbers();
    this.playerNumbers = powerball.generateNumbers();
  }

  async run() {
    while (this.disableStart) {
      this.winningNumbers = this.powerball.generateNumbers();
      this.playerNumbers = this.powerball.generateNumbers();
      const win = this.powerball.compareForWin(this.winningNumbers, this.playerNumbers);
      if (win) {
        this.disableStart = false;
        this.disableStop = true;
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
