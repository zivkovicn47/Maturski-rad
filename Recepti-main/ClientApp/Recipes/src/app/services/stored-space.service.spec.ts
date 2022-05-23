import { TestBed } from '@angular/core/testing';

import { StoredSpaceService } from './stored-space.service';

describe('StoredSpaceService', () => {
  let service: StoredSpaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoredSpaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
