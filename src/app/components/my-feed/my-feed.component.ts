import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { FeedService } from 'src/app/services/feed.service';
import { feedModal } from '../feed/feed.modal';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.component.html',
  styleUrls: ['./my-feed.component.scss']
})
export class MyFeedComponent implements OnInit{
  data!: feedModal[];
  dataLoaded: boolean = false;
   token: string | null | undefined = '';
   localToken = localStorage.getItem('token');
  animationOptions: AnimationOptions = {
    path: 'assets/animations/donut.json',
  };
  constructor(public FeedService: FeedService, private AuthService: AuthService){}

  ngOnInit(): void {  
        this.fetchFeed();
  }

  fetchFeed = () => {
    this.FeedService.fetchFeed(this.token)
    .subscribe(response=>{
      this.data = response;
      this.FeedService.dummyData = response;
      this.dataLoaded = true;
    },
    error=>{
      console.log(error.error);
    }
    );
  }
}