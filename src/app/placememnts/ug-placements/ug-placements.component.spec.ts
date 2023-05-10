import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgPlacementsComponent } from './ug-placements.component';

describe('UgPlacementsComponent', () => {
  let component: UgPlacementsComponent;
  let fixture: ComponentFixture<UgPlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgPlacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
