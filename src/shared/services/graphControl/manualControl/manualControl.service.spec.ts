import { TestBed } from '@angular/core/testing';

import { ManualControlService } from './manualControl.service';

describe('TimerGraphService', () => {
  let service: ManualControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManualControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
