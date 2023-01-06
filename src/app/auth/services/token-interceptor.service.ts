import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler){
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer'
      }
    })
    return next.handle(tokenizedReq)

  }
}
