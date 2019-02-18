import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsSharingService {

  rounds = 0;
  wins = 0;
  money = 0;

  // Getters
  getTotalRounds(): number {
    return this.rounds;
  }

  getWins(): number {
    return this.wins;
  }

  getMoney(): number {
    return this.money;
  }

  // Getters with observables
  getTotalRoundsObs() {

  }

  getWinsObs() {

  }

  getMoneyObs() {

  }

  // Setters
  setTotalRounds(n: number): void {
    this.rounds = n;
  }

  setWins(n: number): void {
    this.wins = n;
  }

  setMoney(n: number): void {
    this.money = n;
  }

  // Other methods
  incrementRounds(): void {
    this.rounds += 1;
  }

  incrementWins(): void {
    this.wins += 1;
  }

  constructor() { }
}
