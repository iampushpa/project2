import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OuterChild2Component } from './outer-child2.component';

describe('OuterChild2Component', () => {
  let component: OuterChild2Component;
  let fixture: ComponentFixture<OuterChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OuterChild2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OuterChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
