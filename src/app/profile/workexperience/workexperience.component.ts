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
      id:1,
      company:"CGI",
      title:"Senior Software Engineer ",
      fromDate:"Nov 2017",
      toDate:"Apr 2019",
      description:"• Implemented designing and coding for the project business requirements."
                  +"• Involved in writing stored procedures and provided technical solutions."
                  +"• Polished feature sets and debugging existing source code."
                  +"• Worked on portfolio management tool which Web and application development."
                  +"• Designed different database objects containing functions, stored procedures and tables."
                  +"• Performed unit testing to ensure developed software is fully functional."
                  +"• Developed strong communication skills by interacting with clients on regular basis."
                  +"• Ensured team targets are met by supporting the peers.",
      projects:[{
        id:"",
        projectName:"",

      },{

      }],
    },
    {
      id:2,
      company:"CSSI (Computer Solution Software International)",
      title:"Software Engineer ",
      fromDate:"Dec 2015",
      toDate:"Oct 2017",
      description:"• Implemented designing and coding for the project business requirements."
                  +"• Involved in writing stored procedures and provided technical solutions."
                  +"•	Collaborated with other software professionals to design software."
                  +"•	Assisted peers on their tasks to be completed on time which improved my teamwork skills towards team."
                  +"•	Developed an application with UI and taking care of Error handling with connections and as well as data."
                  +"•	Supporting and maintenance of an application.",
                 
      projects:[{
        id:"",
        projectName:"",

      },{

      }],
    },
    {
      id:3,
      company:"KARVY Stock Broking Pvt.ltd.",
      title:"Software Engineer ",
      fromDate:"Jun 2015",
      toDate:"Nov 2015",
      description:"• Implemented designing and coding for the project business requirements."
                  +"•	Designing different database objects containing functions, stored procedures and tables."
                  +"•	Performed unit testing to ensure developed software is fully functional."
                  +"•	Worked on finance application software."
                  +"•	Able to meet the deadlines of a project by having proper time management."
                  +"•	Supporting and maintenance of an application.",
      projects:[{
        id:"",
        projectName:"",

      },{

      }],
    },
    {
      id:4,
      company:"Cybernetics International Pvt.ltd.",
      title:"Software Developer",
      fromDate:"Sep 2013",
      toDate:"May 2015",
      description:"• Implemented designing and coding for the project business requirements."
                  +"• Involved in writing stored procedures and provided technical solutions."
                  +"• Polished feature sets and debugging existing source code."
                  +"• Worked on portfolio management tool which Web and application development."
                  +"• Designed different database objects containing functions, stored procedures and tables."
                  +"• Performed unit testing to ensure developed software is fully functional."
                  +"• Developed strong communication skills by interacting with clients on regular basis."
                  +"• Ensured team targets are met by supporting the peers.",
      projects:[{
        id:"",
        projectName:"",

      },{

      }],
    }
    );

  }

}