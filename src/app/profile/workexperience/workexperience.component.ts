import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workexperience',
  templateUrl: './workexperience.component.html',
  styleUrls: ['./workexperience.component.css']
})
export class WorkexperienceComponent implements OnInit {
experienceList:any=[];
  constructor() { }

  ngOnInit() {
    this.experienceList.push({
      id:"",
      companyName:"",
      fromDate:"",
      toDate:"",
      about:"",
      rolendResponsiblities:"",
      projects:[{
        id:"",
        projectName:"",
        
      },{

      }],
    });

  }

}