import { Component, Input, OnInit } from '@angular/core';
import { feedModal } from '../feed/feed.modal';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss'],
})
export class FeedCardComponent implements OnInit {
  constructor(public feedData: FeedService) {}
  @Input('card-data') cardData!: feedModal;
  heartSwitch: string = 'bi-suit-heart';
  heartLikedFlag: boolean = false;

  ngOnInit(): void {
    // if()
  }

  get getInitials() {
    return this.cardData.name.split(' ');
  }

  likeSwitch = () => {
    this.heartLikedFlag = !this.heartLikedFlag;
    this.cardData.liked = true;
    this.feedData.dummyData.filter((current: feedModal) => {
      if (current.postId == this.cardData.postId) {
        current.liked = true;
      }
    });
    // this.heartSwitch = this.heartLikedFlag ? 'bi-suit-heart-fill' : 'bi-suit-heart'
  };
}
