import { Component, ContentChild, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import AuthModel from 'src/app/modals/auth.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.scss']
})
export class LoginSignupComponent implements OnInit{
  // authForm!: NgForm;
  @ContentChild('authForm') authForm!: ContentChild;
  isLogin = false;
  loginSignupData: AuthModel["signUpPayload"] | null = null;
  userInfo = {};
  nameBlock: boolean = true;
  passwordBlock: boolean = false;
  profileBlock: boolean = false;
  
  constructor(private route: ActivatedRoute, private AuthService: AuthService, private SharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    console.log(this.authForm);
    this.SharedService.pageView = 'login-signup';
    if(this.route.snapshot.routeConfig?.path === 'signup') {
      this.isLogin = false;
    } else {
      this.isLogin = true;
    }  
  }

  // isLoggedIn = (isLogin: boolean) => {
  //   this.isLogin = isLogin;
  // }



}
