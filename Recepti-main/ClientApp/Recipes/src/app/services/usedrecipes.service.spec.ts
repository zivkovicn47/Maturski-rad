import { TestBed } from '@angular/core/testing';

import { UsedRecipesService } from './usedrecipes.service';

describe('UsedrecipesService', () => {
  let service: UsedRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsedRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
