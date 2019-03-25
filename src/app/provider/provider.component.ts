import { Component, OnInit,Inject,Injectable } from '@angular/core';
import { HomeService } from "../../service/home.service";
import { Router } from '@angular/router';

// import { Pipe, PipeTransform } from '@angular/core';
// @Pipe({ name: 'FirstName' })

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})


@Injectable()
export class ProviderComponent implements OnInit {
  private usersList;
  constructor(private _userService:HomeService,private myRouter: Router) { }

  ngOnInit() {
    this._userService.getAllUser().subscribe(response => this.usersList = response.recordset,
      error=> { alert(`Can't get users.`); }
      );
      // this.LoadJSON(this.usersList)
  }

  // transform(usersList: any, searchText: any): any {
  //   if(searchText == null) return usersList;

  //   return usersList.filter(function(FirstName){
  //     return usersList.FirstName.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  //   })
  // }

  add=function(ID:any){
    this.myRouter.navigateByUrl('/addoreditprovider');
  }
}

