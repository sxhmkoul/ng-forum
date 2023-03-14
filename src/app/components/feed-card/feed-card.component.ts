import { Component, Input, OnInit } from '@angular/core';
import { feedModal } from '../feed/feed.modal';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {
  @Input('card-data') cardData !: feedModal;
  heartSwitch: string = 'bi-suit-heart';
  heartLikedFlag: boolean = false;

  ngOnInit(): void {
      console.log(this.cardData);
  }

  likeSwitch = () => {
    this.heartLikedFlag = !this.heartLikedFlag;
    // this.heartSwitch = this.heartLikedFlag ? 'bi-suit-heart-fill' : 'bi-suit-heart'
  }
}
