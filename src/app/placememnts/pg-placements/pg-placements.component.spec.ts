import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgPlacementsComponent } from './pg-placements.component';

describe('PgPlacementsComponent', () => {
  let component: PgPlacementsComponent;
  let fixture: ComponentFixture<PgPlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgPlacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
