import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayEmployeeReviewInfoComponent } from './display-employee-review-info/display-employee-review-info.component';
import { EmployeeReviewFormComponent } from './employee-review-form/employee-review-form.component';

const routes: Routes = [
  {path:'',component:EmployeeReviewFormComponent},
  {path:'employeeRevie', component:EmployeeReviewFormComponent},
  {path:'details', component:DisplayEmployeeReviewInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
