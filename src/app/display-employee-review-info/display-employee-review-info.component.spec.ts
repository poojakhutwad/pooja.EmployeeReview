import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEmployeeReviewInfoComponent } from './display-employee-review-info.component';

describe('DisplayEmployeeReviewInfoComponent', () => {
  let component: DisplayEmployeeReviewInfoComponent;
  let fixture: ComponentFixture<DisplayEmployeeReviewInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEmployeeReviewInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEmployeeReviewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
