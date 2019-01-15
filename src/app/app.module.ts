import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeReviewFormComponent } from './employee-review-form/employee-review-form.component';
import { DisplayEmployeeReviewInfoComponent } from './display-employee-review-info/display-employee-review-info.component';
import { EmployeeReviewService } from './employee-review.service';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeReviewFormComponent,
    DisplayEmployeeReviewInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule
  ],
  providers: [
    EmployeeReviewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
