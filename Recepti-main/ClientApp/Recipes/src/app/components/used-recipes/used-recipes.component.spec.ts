import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsedRecipesComponent } from './used-recipes.component';

describe('UsedRecipesComponent', () => {
  let component: UsedRecipesComponent;
  let fixture: ComponentFixture<UsedRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsedRecipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsedRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
