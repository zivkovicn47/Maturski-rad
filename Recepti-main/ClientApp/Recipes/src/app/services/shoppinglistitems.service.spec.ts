import { TestBed } from '@angular/core/testing';

import { ShoppinglistitemsService } from './shoppinglistitems.service';

describe('ShoppinglistitemsService', () => {
  let service: ShoppinglistitemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppinglistitemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
