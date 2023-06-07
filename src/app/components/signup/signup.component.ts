import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy{
  queryParamSubscription: Subscription = new Subscription;
  isLogin = false;
  showAdditionalInfoPanel = false;

  constructor(private route: ActivatedRoute, private AuthService: AuthService, private SharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/signup']);
      this.queryParamSubscription = this.route.queryParams.subscribe(param=>{
        if(Object.keys(param).length && param['step'] === 'info'){
          this.showAdditionalInfoPanel = true;
        } else {
          this.showAdditionalInfoPanel = false;
        }
      })
  }

  loginSignupHandler = (authForm: NgForm) =>{
    console.log(authForm);
    let loginSignupData = {
      email: authForm.value.email,
      password: authForm.value.password,
      returnSecureToken: true
    }

    let userData = {
      name: authForm.value.first_name + authForm.value.last_name,
      email: authForm.value.email,
      profession: authForm.value.profession,
      country: authForm.value.country,
      experience: authForm.value.exp
    }

    this.AuthService.signup(loginSignupData).subscribe(res=>{
          console.log('user created successfully');
          this.AuthService.createUser(userData).subscribe(res=>{
            console.log(res);
          })
          this.router.navigate(['/feed']);
        },
        error=>{
          alert(error);
        })
  }

  ngOnDestroy(): void {
      this.queryParamSubscription.unsubscribe();
  }
}
