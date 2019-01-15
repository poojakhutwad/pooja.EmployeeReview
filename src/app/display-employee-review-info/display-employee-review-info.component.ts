import { Component, OnInit } from '@angular/core';
import { EmpRevInfo } from '../empRevInfo';

@Component({
  selector: 'app-display-employee-review-info',
  templateUrl: './display-employee-review-info.component.html',
  styleUrls: ['./display-employee-review-info.component.css']
})
export class DisplayEmployeeReviewInfoComponent implements OnInit {
  empdata:EmpRevInfo = new EmpRevInfo("","",0, 0, 0, "","","","","","", false); 
  isTrue: boolean = true;

  constructor() {}

  ngOnInit() {
  }

}
