import { Component, OnInit } from '@angular/core';
import { EmpRevInfo } from '../empRevInfo';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-review-form',
  templateUrl: './employee-review-form.component.html',
  styleUrls: ['./employee-review-form.component.css']
})
export class EmployeeReviewFormComponent implements OnInit {
  @Output() public empData = new EventEmitter();
  empRevInfo:EmpRevInfo = new EmpRevInfo("","","", 0,0 ,0 , "", "","","","",false);
  days: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
                   ,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  months: number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
  
  years: number[] = [2018,2019,2020,2021,2022,2023,2024,2024,2025];

  departments: string[] = ["Marketing","Sales","Accounting","IT"];
  
  constructor() { }

  SubmitForm(data: any){
     data.isSubmited = true;
     this.empData.emit(data);
     debugger;
  }
  ngOnInit() {
  }
}