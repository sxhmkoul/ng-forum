import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { feedModal } from '../feed/feed.modal';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent {
constructor(private routes: ActivatedRoute, private feedData: FeedService){}
currentId: string = this.routes.snapshot.params['id'];
currentPost = this.feedData.dummyData.filter((currVal: feedModal)=>{
  if(currVal.id == this.currentId){
    return currVal;
  } else return;
})
}
