import { Injectable } from '@angular/core';

import { NumberGeneratorService } from './number-generator.service';

@Injectable({
  providedIn: 'root'
})
export class PowerballService {

  // TODO Add tests to make sure this works
  // TODO Add win conditions for winning aside from jackpot
  compareForWin(nums1, nums2): boolean {
    const mainNums1 = nums1.slice(0, -1);
    const mainNums2 = nums2.slice(0, -1);
    const powNum1 = nums1.slice(-1);
    const powNum2 = nums2.slice(-1);
    if (powNum1 !== powNum2) {
      return false;
    }
    const numsMap = new Map<number, number>();
    mainNums1.forEach(num => {
      numsMap.set(num, 1);
    });
    for (const num of mainNums2) {
      if (numsMap.has(num)) {
        return false;
      }
    }
    return true;
  }

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
