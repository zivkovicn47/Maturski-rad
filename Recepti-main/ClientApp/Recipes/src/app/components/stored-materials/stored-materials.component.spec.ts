import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredMaterialsComponent } from './stored-materials.component';

describe('StoredMaterialsComponent', () => {
  let component: StoredMaterialsComponent;
  let fixture: ComponentFixture<StoredMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoredMaterialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
