import { Injectable } from '@angular/core';
import {
    HttpRequest, HttpHandler, HttpEvent, HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // we need to add an OAUTH token as a header to access the Github API
        const clone = req.clone({ setHeaders: { 'Authorization': ''} });
        return next.handle(clone);
    }

}
