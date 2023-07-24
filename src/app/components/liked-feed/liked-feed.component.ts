import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { feedModal } from '../feed/feed.modal';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-liked-feed',
  templateUrl: './liked-feed.component.html',
  styleUrls: ['./liked-feed.component.scss'],
})
export class LikedFeedComponent implements OnInit {
  constructor(
    public feedData: FeedService,
    private SharedService: SharedService
  ) {}
  likedPosts: feedModal[] = [];

  ngOnInit(): void {
    this.SharedService.pageView = 'LIKED';
    this.feedData.dummyData.filter((val: feedModal) => {
      if (val.liked) {
        console.log(val);
        this.likedPosts.push(val);
      }
    });
    console.log(this.likedPosts);
  }
}
