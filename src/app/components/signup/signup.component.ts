import {
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import AuthModel from 'src/app/modals/auth.model';
import { UserConfig } from 'src/app/modals/user-config.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  @ViewChild('signInForm') signInForm!: NgForm;
  isLogin = false;
  showAdditionalInfoPanel = false;
  signupData!: AuthModel['signUpPayload'];
  userInfo: any = {};

  constructor(
    private route: ActivatedRoute,
    private AuthService: AuthService,
    private SharedService: SharedService,
    private UserService: UserService,
    private router: Router
  ) {}

  toUserInfo = (form: NgForm) => {
    console.log(form);
    this.signupData = {
      email: form.value.email,
      password: form.value.password,
      returnSecureToken: true,
    };
    this.userInfo['first_name'] = form.value.first_name;
    this.userInfo['last_name'] = form.value.last_name;
    this.userInfo['email'] = form.value.email;
    this.userInfo['username'] = form.value.username;
    this.showAdditionalInfoPanel = true;
  };

  backToSignUp = () => {
    this.showAdditionalInfoPanel = false;
    this.firstName = this.userInfo['first_name'];
    this.lastName = this.userInfo['last_name'];
    this.email = this.userInfo['email'];
    this.username = this.userInfo['username'];
  };

  finishSignup = (authForm: NgForm) => {
    this.userInfo['profession'] = authForm.value.profession;
    this.userInfo['country'] = authForm.value.country;
    this.userInfo['experience'] = authForm.value.exp;
    console.log(this.userInfo);
    console.log(authForm);
    this.AuthService.signup(this.signupData).subscribe(
      (res) => {
        console.log('user created successfully');
        this.UserService.createUser(this.userInfo).subscribe((res: any) => {
          this.UserService.userInfoSubject.next(res);
          // localStorage.setItem('userInfo', JSON.stringify(res));
        });
        this.router.navigate(['/feed']);
      },
      (error) => {
        alert(error);
      }
    );
  };
}
