import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberGeneratorService {

  generateNumber(min= 0, max= 10): number {
    return Math.floor((Math.random() * max) + min);
  }

  constructor() { }
}
