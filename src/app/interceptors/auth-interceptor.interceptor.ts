import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  sessionToken = localStorage.getItem('token');

  constructor(private AuthService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let parsedToken = this.sessionToken && JSON.parse(this.sessionToken);


    return this.AuthService.userData.pipe(
      take(1),
     exhaustMap(user=>{
        if(!user && !parsedToken){
          console.log('null user');
          return next.handle(request);
        } else {
          console.log('valid user');
          let modifiedReq = request.clone({
            params: new HttpParams().set('auth', user?.getToken == null ? parsedToken._token : user.getToken)
          });
          return next.handle(modifiedReq);
        }
     })
    )
    // return next.handle(request);
  }
}
