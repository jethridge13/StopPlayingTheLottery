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

  constructor(private powerball: PowerballService) {
  }

  ngOnInit() {
  }

}
