import { TestBed } from '@angular/core/testing';

import { StatsSharingService } from './stats-sharing.service';

describe('StatsSharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatsSharingService = TestBed.get(StatsSharingService);
    expect(service).toBeTruthy();
  });
});
