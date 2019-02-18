import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  wins = 0;
  totalRounds = 0;
  money = 0;

  constructor() { }

  ngOnInit() {
  }

}
