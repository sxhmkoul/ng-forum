import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { feedModal } from '../feed/feed.modal';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.scss'],
})
export class MyQuestionsComponent implements OnInit {
  // AuthService: any;
  token: any;
  constructor(
    public FeedService: FeedService,
    private AuthService: AuthService,
    private UserService: UserService,
    private SharedService: SharedService
  ) {}
  myPosts: feedModal[] = [];
  isLoaded: boolean = false;
  filtered: feedModal[] = [];
  animationOptions: AnimationOptions = {
    path: 'assets/animations/donut.json',
  };

  ngOnInit(): void {
    this.SharedService.pageView = 'MY-POST';
    this.AuthService.userData.subscribe((res: any) => {
      this.token = res?.getToken;
    });
    this.FeedService.fetchFeed(this.token).subscribe((res) => {
      this.FeedService.dummyData = res.reverse();
      this.UserService.filterFeed(res.reverse()).then((res) => {
        console.log('filtered', res);
        this.filtered = res;
        this.isLoaded = true;
        console.log('this.filtered', this.filtered);
        // this.FeedService.isLoaded = true;
      });
    });
  }
}
