import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePlacementsComponent } from './home-placements.component';

describe('HomePlacementsComponent', () => {
  let component: HomePlacementsComponent;
  let fixture: ComponentFixture<HomePlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePlacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
