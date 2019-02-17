import { Injectable } from '@angular/core';

import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class PowerballService {

  generateNumbers(): number[] {
    const numbers = [];
    for (let i = 0; i < 5; i++) {
      numbers.push(this.num.generateNumber(1, 69));
    }
    numbers.push(this.num.generateNumber(1, 26));
    return numbers;
  }

  constructor(private num: NumberGeneratorService) { }
}
