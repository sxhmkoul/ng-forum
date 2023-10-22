import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  sessionToken = localStorage.getItem('token');

  constructor(private AuthService: AuthService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.AuthService.userData.value || this.validateToken){
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
  }

  get validateToken() {
    let parsedToken = this.sessionToken && JSON.parse(this.sessionToken);
    if(!parsedToken){
      return parsedToken;
    }
    let checkValidity = new Date().getTime() > parsedToken._expiredIn ? false : true;
    console.log('this session is :', checkValidity);
    return checkValidity;
  }
  
}
