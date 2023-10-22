import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })), // Initial state when the element is not in the DOM
      state('*', style({ opacity: 1, transform: 'translateY(0)' })), // Final state when the element is in the DOM
      transition('void => *', animate('300ms ease-in')), // Animation when the element is added to the DOM
      transition('* => void', animate('300ms ease-out')), // Animation when the element is removed from the DOM
    ]),
  ],
})
export class ProfileComponent implements OnInit {
  constructor(
    private UtilsService: UtilsService,
    private UserService: UserService,
    private SharedService: SharedService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.SharedService.pageView = 'PF';
    this.router.navigateByUrl('/profile/posts');
  }

  get getSubPageType() {
    return this.SharedService.subPageView;
  }

  get getTabsData() {
    return this.UtilsService.PROFILE_TABS;
  }

  get userInfo() {
    return this.UserService.userInfoSubject.getValue();
  }
}
