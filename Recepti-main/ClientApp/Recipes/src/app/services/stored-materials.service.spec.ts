import { TestBed } from '@angular/core/testing';

import { StoredMaterialsService } from './stored-materials.service';

describe('StoredMaterialsService', () => {
  let service: StoredMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoredMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
