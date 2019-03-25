import { Http, Response, Headers, RequestOptions } from '@angular/http';
import  { Injectable } from '@angular/core' ;
import  { HttpClient } from '@angular/common/http';
//import  { Observable } from 'rxjs/Observable';
import { IHome } from '../models/home';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
// import { IHome } from '../models';

@Injectable()
export class HomeService {
    private _homeUrl = '../api/home/home.json';

    constructor(private _http:Http){}


    private BASE_URL:string =  "http://localhost:8081";
    
    
    public getAllUser(){
        return this._http.get(this.BASE_URL + '/users')
          .map((res:Response) => res.json())
          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
      }
    

    getContractingOffices() : IHome[] {
      return  [
            {
        "coid": 1,
        "coName": "Leaf Rake",
        "state": "AL"
    },
    {
        "coid": 2,
        "coName": "Garden Cart",
        "state": "AK"
    },
    {
        "coid": 5,
        "coName": "Hammer",
        "state": "FL"
    },
    {
        "coid": 8,
        "coName": "Saw",
        "state": "MI"
    },
    {
        "coid": 10,
        "coName": "Video Game Controller",
        "state": "WA"
    }
        ]   

    }
   
}



