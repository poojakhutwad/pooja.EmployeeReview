import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeReviewFormComponent } from './employee-review-form.component';

describe('EmployeeReviewFormComponent', () => {
  let component: EmployeeReviewFormComponent;
  let fixture: ComponentFixture<EmployeeReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
