import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { feedModal } from '../feed/feed.modal';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.scss']
})
export class MyQuestionsComponent implements OnInit {
constructor(public feedData: FeedService){}
myPosts : feedModal[] = []

ngOnInit(): void {
    this.feedData.dummyData.filter((val: feedModal)=>{
      if(val.name === 'Saksham Koul'){
        this.myPosts.push(val);
      }
    })
  }
}
