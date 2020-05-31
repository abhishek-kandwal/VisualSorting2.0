import { TestBed } from '@angular/core/testing';

import { IsManualService } from './is-manual.service';

describe('IsManualService', () => {
  let service: IsManualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsManualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
