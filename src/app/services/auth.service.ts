import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import AuthModel from '../modals/auth.model';
import {
  BehaviorSubject,
  Subject,
  catchError,
  take,
  tap,
  throwError,
} from 'rxjs';
import { User } from '../modals/user.model';
import { Router } from '@angular/router';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  API_KEY = this.CredentialService.API_KEYS.firebase_auth;
  userData = new BehaviorSubject<User | null>(null);
  localToken = localStorage.getItem('token');
  isLoggedIn: boolean = false;
  private parsedToken = this.localToken && JSON.parse(this.localToken);

  constructor(
    private http: HttpClient,
    private router: Router,
    private CredentialService: CredentialService
  ) {}

  signup = (userData: AuthModel['signUpPayload']) => {
    return this.http
      .post<AuthModel['signUpResponse']>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
          this.API_KEY,
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: userData.returnSecureToken,
        }
      )

      .pipe(
        catchError((error) => {
          // handle error logic here i.e. switch case for error codes or responses.
          console.log('error occured', error);
          return throwError('Oh shit');
        }),
        tap((res) => {
          this.handleDataBeam(res);
        })
      );
  };

  login = (loginData: AuthModel['loginPayload']) => {
    return this.http
      .post<AuthModel['loginResponse']>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          this.API_KEY,
        {
          email: loginData.email,
          password: loginData.password,
          returnSecureToken: loginData.returnSecureToken,
        }
      )
      .pipe(
        catchError((error) => {
          return throwError('Oh shoot');
        }),
        tap((res) => {
          // this is not a racing case as a component can access BehaviorSubject's value anytime as it provides a previous value.
          console.log('tapped into login');
          this.handleDataBeam(res);
        })
      );
  };

  handleDataBeam = (res: AuthModel['loginResponse']) => {
    const expiry = new Date().getTime() + +res.expiresIn * 1000;
    const user = new User(res.email, res.localId, res.idToken, expiry);
    localStorage.setItem('token', JSON.stringify(user));
    // this.isLoggedIn = true;
    this.userData.next(user);
  };

  logout = () => {
    // this.isLoggedIn = false;
    this.userData.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  };
}
