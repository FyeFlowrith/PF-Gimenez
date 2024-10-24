import { TestBed } from '@angular/core/testing';

import { EnrollmentServiceTsService } from './enrollment.service.ts.service';

describe('EnrollmentServiceTsService', () => {
  let service: EnrollmentServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrollmentServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
