import { TestBed } from '@angular/core/testing';

import { NumberGeneratorService } from './number-generator.service';

describe('NumberGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumberGeneratorService = TestBed.get(NumberGeneratorService);
    expect(service).toBeTruthy();
  });
});
