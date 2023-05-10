import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsExamComponent } from './instructions-exam.component';

describe('InstructionsExamComponent', () => {
  let component: InstructionsExamComponent;
  let fixture: ComponentFixture<InstructionsExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstructionsExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
