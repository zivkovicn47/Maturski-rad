import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorigeSpaceComponent } from './storige-space.component';

describe('StorigeSpaceComponent', () => {
  let component: StorigeSpaceComponent;
  let fixture: ComponentFixture<StorigeSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorigeSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StorigeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
