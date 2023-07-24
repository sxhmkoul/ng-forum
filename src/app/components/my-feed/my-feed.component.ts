import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { FeedService } from 'src/app/services/feed.service';
import { feedModal } from '../feed/feed.modal';
import { AuthService } from 'src/app/services/auth.service';
import { StateService } from 'src/app/services/state.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.component.html',
  styleUrls: ['./my-feed.component.scss'],
})
export class MyFeedComponent implements OnInit {
  data!: feedModal[];
  dataLoaded: boolean = false;
  token: string | null | undefined = '';
  localToken = localStorage.getItem('token');
  animationOptions: AnimationOptions = {
    path: 'assets/animations/donut.json',
  };
  constructor(
    public FeedService: FeedService,
    private AuthService: AuthService,
    private UserService: UserService,
    private cdr: ChangeDetectorRef,
    private state: StateService,
    private route: ActivatedRoute,
    private SharedService: SharedService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.routeConfig?.path === 'posts') {
      this.SharedService.subPageView = 'PF-FEED';
      this.fetchFeedByUserId();
    } else {
      this.SharedService.pageView = 'FEED';
      this.SharedService.subPageView = '';
      this.fetchFeed();
    }
  }

  fetchFeed = () => {
    this.FeedService.fetchFeed(this.token).subscribe(
      (response) => {
        this.data = response.reverse();
        this.FeedService.dummyData = response.reverse();
        this.dataLoaded = true;
        this.state.isLoaded = true;
        console.log(
          'this.FeedService.dummyData my feed',
          this.FeedService.dummyData
        );
        // this.cdr.detectChanges();
      },
      (error) => {
        console.log(error.error);
      }
    );
  };

  fetchFeedByUserId = () => {
    this.FeedService.fetchFeedByUserId(
      this.UserService.userInfoSubject.getValue()?.userId
    ).subscribe((res) => {
      console.log('fetched feed by userid', res);
      this.data = res.reverse();
      this.FeedService.dummyData = res.reverse();
      this.dataLoaded = true;
      this.state.isLoaded = true;
    });
  };
}
