import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isLogin = false;

  constructor(private route: ActivatedRoute, private AuthService: AuthService, private SharedService: SharedService, private router: Router) {}



  loginSignupHandler = (authForm: NgForm) =>{
    let loginSignupData = {
      email: authForm.value.email,
      password: authForm.value.password,
      returnSecureToken: true
    }
    
    this.AuthService.login(loginSignupData).subscribe(res=>{
          console.log('user logged in successfully');
          this.router.navigate(['/feed']);
        },
        error=>{
          alert(error);
        })
  }

}
