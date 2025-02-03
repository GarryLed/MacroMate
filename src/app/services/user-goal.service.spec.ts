import { TestBed } from '@angular/core/testing';

import { UserGoalService } from './user-goal.service';

describe('UserGoalService', () => {
  let service: UserGoalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGoalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
