import { TestBed } from '@angular/core/testing';

import { ConsultServiceService } from './consult-service.service';

describe('ConsultServiceService', () => {
  let service: ConsultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
