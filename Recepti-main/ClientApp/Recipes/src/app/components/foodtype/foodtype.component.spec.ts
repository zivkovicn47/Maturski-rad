import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodtypeComponent } from './foodtype.component';

describe('FoodtypeComponent', () => {
  let component: FoodtypeComponent;
  let fixture: ComponentFixture<FoodtypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodtypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
