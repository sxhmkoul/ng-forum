import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
import { MenuVerticalComponent } from '../menu-vertical/menu-vertical.component';
import { menuMap } from '../menu-vertical/menu.modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ContentChild(MenuVerticalComponent)
  MenuVerticalComponent!: MenuVerticalComponent;
  [x: string]: any;
  todoSwitchNav: boolean = false;
  loginStatus: boolean = false;
  activeUser: string = '';
  mobileMenuMapping: menuMap[] = [
    {
      icon: 'fa-newspaper',
      text: 'Hey,' + (this.activeUser || 'User'),
      routerLink: '/profile',
    },
    { icon: 'fa-clipboard', text: 'My Posts', routerLink: '/my-posts' },
    { icon: 'fa-heart', text: 'Liked', routerLink: '/liked' },
    { icon: 'fa-clipboard', text: 'Tags', routerLink: '/feed/tags' },
    { icon: 'fa-user', text: 'Profile', routerLink: '/profile' },
  ];

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
      console.log('subbed', res);
      this.activeUser = res?.first_name || '';
      this.loginStatus = !!(res && Object.values(res).length);
      console.log(this.activeUser);
      this.mobileMenuMapping[0]['text'] = 'Hey ' + this.activeUser;
    });

    if (!this.activeUser) {
      let localData = JSON.parse(localStorage.getItem('userInfo') || '');
      console.log('localData', localData);
      this.UserService.userInfoSubject.next(localData);
      this.loginStatus = !!localData;
    }
  }

  activateTodo = () => {
    this.todoSwitchNav = !this.todoSwitchNav;
  };

  logout = () => {
    this.AuthService.logout();
  };

  showSubmenu = () => {};
}
