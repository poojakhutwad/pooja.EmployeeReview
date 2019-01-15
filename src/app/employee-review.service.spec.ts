import { TestBed } from '@angular/core/testing';

import { EmployeeReviewService } from './employee-review.service';

describe('EmployeeReviewService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeReviewService = TestBed.get(EmployeeReviewService);
    expect(service).toBeTruthy();
  });
});
