import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { FeedService } from 'src/app/services/feed.service';
import { feedModal } from '../feed/feed.modal';

@Component({
  selector: 'app-my-feed',
  templateUrl: './my-feed.component.html',
  styleUrls: ['./my-feed.component.scss']
})
export class MyFeedComponent implements OnInit{
  data!: feedModal[];
  dataLoaded: boolean = false;
  animationOptions: AnimationOptions = {
    path: 'assets/animations/donut.json',
  };
  constructor(public FeedService: FeedService){}

  ngOnInit(): void {
      this.fetchFeed();
  }

  fetchFeed = () => {
    this.FeedService.fetchFeed()
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
