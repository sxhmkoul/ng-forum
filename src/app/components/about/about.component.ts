import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modals/user.model';
import { SharedService } from 'src/app/services/shared.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private SharedService: SharedService,
    private UserService: UserService
  ) {}

  ngOnInit(): void {
    this.SharedService.subPageView = 'PF-ABT';
  }

  get getUserInfo() {
    return this.UserService.userInfoSubject.getValue();
  }
}
