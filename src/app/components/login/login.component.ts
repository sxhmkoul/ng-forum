import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserConfig } from 'src/app/modals/user-config.model';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoggedIn = false;
  showLoader = false;

  constructor(
    private route: ActivatedRoute,
    private AuthService: AuthService,
    private SharedService: SharedService,
    private router: Router,
    private UserService: UserService
  ) {}

  loginSignupHandler = (authForm: NgForm) => {
    this.showLoader = true;
    let loginSignupData = {
      email: authForm.value.email,
      password: authForm.value.password,
      returnSecureToken: true,
    };

    this.AuthService.login(loginSignupData).subscribe(
      (res) => {
        console.log('user logged in successfully');
        this.showLoader = false;
        this.UserService.fetchUser(loginSignupData.email).subscribe(
          (res: any) => {
            console.log(res);
            const formattedInfo = Object.values(res)[0] as UserConfig;
            localStorage.setItem('userInfo', JSON.stringify(formattedInfo));
            this.UserService.userInfoSubject.next(formattedInfo);
          }
        );
        this.router.navigate(['/feed']);
      },
      (error) => {
        alert(error);
      }
    );
  };
}
