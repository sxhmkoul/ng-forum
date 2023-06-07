import { ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  todoSwitchNav: boolean = false;
  loginStatus: boolean = false;

  constructor(public SharedService: SharedService, public AuthService: AuthService) {}

  ngOnInit(): void {
      this.AuthService.userData.subscribe(res=>{
        this.loginStatus = !!Object.keys(res || {}).length;
        this.AuthService.isLoggedIn = this.loginStatus;
      })
  }

  activateTodo = () => {
    this.todoSwitchNav = !this.todoSwitchNav;
  }

  logout = () => {
    this.AuthService.logout();
  }
}
