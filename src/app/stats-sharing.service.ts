import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsSharingService {

  rounds = 0;
  roundsEvent = new EventEmitter<number>();
  wins = 0;
  winsEvent = new EventEmitter<number>();
  money = 0;
  moneyEvent = new EventEmitter<number>();
  jackpots = 0;
  jackpotsEvent = new EventEmitter<number>();

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

  getJackpots(): number {
    return this.jackpots;
  }

  // EventEmitters
  getTotalRoundsEvent(): EventEmitter<number> {
    return this.roundsEvent;
  }

  getWinsEvent(): EventEmitter<number> {
    return this.winsEvent;
  }

  getMoneyEvent(): EventEmitter<number> {
    return this.moneyEvent;
  }

  getJackpotsEvent(): EventEmitter<number> {
    return this.jackpotsEvent;
  }

  // Setters
  setTotalRounds(n: number): void {
    this.rounds = n;
    this.roundsEvent.emit(n);
  }

  setWins(n: number): void {
    this.wins = n;
    this.winsEvent.emit(n);
  }

  setMoney(n: number): void {
    this.money = n;
    this.moneyEvent.emit(n);
  }

  setJackpots(n: number): void {
    this.jackpots = n;
    this.jackpotsEvent.emit(n);
  }

  // Increment methods
  incrementRounds(): void {
    this.rounds += 1;
    this.roundsEvent.emit(this.rounds);
  }

  incrementWins(): void {
    this.wins += 1;
    this.winsEvent.emit(this.wins);
  }

  incrementMoney(n: number): void {
    this.money += n;
    this.moneyEvent.emit(this.money);
  }

  incrementJackpots(): void {
    this.jackpots += 1;
    this.jackpotsEvent.emit(this.jackpots);
  }

  constructor() { }
}
