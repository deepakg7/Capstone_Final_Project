import { TestBed } from '@angular/core/testing';

import { ScheduleTourService } from './schedule-tour.service';

describe('ScheduleTourService', () => {
  let service: ScheduleTourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleTourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
