import {Injectable} from '@angular/core'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {HttpClient,HttpHeaders } from '@angular/common/http'

@Injectable()
export class UserService {

    private BASE_URL:string = 'http://localhost:8081/api';
    constructor( private http: HttpClient)
    {

    }
    public getAllUser(){
		return this.http.get(this.BASE_URL + '/users');
	}
}