import { Injectable } from '@angular/core';
import {HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent} from '@angular/common/http'
import { Observable } from 'rxjs';
import { getToken } from './authHelper';

@Injectable({
  providedIn: 'root'
})
export class HotelesInterceptorService implements HttpInterceptor {

  constructor(private http:HttpClient) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
        'Authorization': `Bearer ${getToken()}`,
      },
    });
    return next.handle(req);
  }

}
