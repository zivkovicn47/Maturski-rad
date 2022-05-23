import { TestBed } from '@angular/core/testing';

import { FoodtypeService } from './foodtype.service';

describe('FoodtypeService', () => {
  let service: FoodtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
