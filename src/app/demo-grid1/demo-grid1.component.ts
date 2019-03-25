import { Component, OnInit,Inject,Injectable } from '@angular/core';
// import{DataTableResource} from 'angular-4-data-table-bootstrap-4'
import { HomeService } from "../../service/home.service";

@Component({
  selector: 'app-demo-grid1',
  templateUrl: './demo-grid1.component.html',
  styleUrls: ['./demo-grid1.component.css'],
  // providers: [HomeService]
})


@Injectable()
export class DemoGrid1Component implements OnInit {
  private usersList;

  
   itemResource:any = null;
  items:any = null;
  itemCount = 0;

  // constructor(private _userService:HomeService) { }
  constructor() { }

  ngOnInit() {
    // console.log("texty");
    // this._userService.getAllUser().subscribe(response => this.usersList = response.recordset,
    //   error=> { alert(`Can't get users.`); }
    //   );
    //   this.LoadJSON(this.usersList)
      
  }
}

  //  public LoadJSON(params:any) {
    
    // var itemResource = new DataTableResource(params);
    // this.reloadItems(params,itemResource)

  //}
  //reloadItems(params:any,itemResource:any) {
    // itemResource.query(params).then(items => this.items = items);
    // console.log(this.items);
//}

// special properties:

// rowClick(rowEvent) {
//     console.log('Clicked: ' + rowEvent.row.item.name);
// }

// rowDoubleClick(rowEvent) {
//     alert('Double clicked: ' + rowEvent.row.item.name);
// }

// rowTooltip(item) { return item.jobTitle; }

// }


// export class DataTableDemo1 {

//     itemResource = new DataTableResource(persons);
//     items = [];
//     itemCount = 0;

//     constructor() {
//         this.itemResource.count().then(count => this.itemCount = count);
//     }

//     reloadItems(params) {
//         this.itemResource.query(params).then(items => this.items = items);
//     }

//     // special properties:

//     rowClick(rowEvent) {
//         console.log('Clicked: ' + rowEvent.row.item.name);
//     }

//     rowDoubleClick(rowEvent) {
//         alert('Double clicked: ' + rowEvent.row.item.name);
//     }

//     rowTooltip(item) { return item.jobTitle; }
// }
