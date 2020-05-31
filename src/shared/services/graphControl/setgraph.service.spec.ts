import { TestBed } from '@angular/core/testing';

import { SetgraphService } from './setgraph.service';

describe('SetgraphService', () => {
  let service: SetgraphService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SetgraphService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
