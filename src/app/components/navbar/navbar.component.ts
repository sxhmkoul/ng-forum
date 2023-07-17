import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  todoSwitchNav: boolean = false;
  loginStatus: boolean = false;
  activeUser: string = '';

  constructor(
    public SharedService: SharedService,
    public AuthService: AuthService,
    public UserService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.AuthService.userData.subscribe((res) => {
      this.loginStatus = !!Object.keys(res || {}).length;
      this.AuthService.isLoggedIn = this.loginStatus;
    });

    this.UserService.userInfoSubject.subscribe((res) => {
      // this.UserService.userInfo = {...Object.values(res)[0]};
      // this.activeUser = res && Object.values(res)[0].first_name;
      console.log('subbed', res);
      this.activeUser = res?.first_name || '';
      this.loginStatus = !!(res && Object.values(res).length);
      console.log(this.activeUser);
    });

    if (!this.activeUser) {
      let localData = JSON.parse(localStorage.getItem('userInfo') || '');
      console.log('localData', localData);
      this.UserService.userInfoSubject.next(localData);
      this.loginStatus = !!localData;
      // this.activeUser = localData.first_name || '';
      // this.AuthService.isLoggedIn = !!localStorage.getItem('token');
      // this.UserService.userInfo = localData || {};
      // this.cdr.detectChanges();
      // console.log('active user here',this.activeUser);
    }
  }

  activateTodo = () => {
    this.todoSwitchNav = !this.todoSwitchNav;
  };

  logout = () => {
    this.AuthService.logout();
  };
}
