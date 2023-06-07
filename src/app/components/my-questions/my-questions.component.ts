import { Component, OnInit } from '@angular/core';
import { FeedService } from '../../services/feed.service';
import { feedModal } from '../feed/feed.modal';
import { AnimationOptions } from 'ngx-lottie';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-questions',
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.scss']
})
export class MyQuestionsComponent implements OnInit {
// AuthService: any;
  token: any;
constructor(public FeedService: FeedService, private AuthService: AuthService){}
myPosts : feedModal[] = [];
isLoaded: boolean = false;
filtered: feedModal[] = [];
animationOptions: AnimationOptions = {
  path: 'assets/animations/donut.json',
};

ngOnInit(): void {
  console.log('my questions');
  this.AuthService.userData.subscribe((res: any)=>{
    this.token = res?.getToken;
  })
  this.FeedService.fetchFeed(this.token).subscribe(res=>{
    this.FeedService.dummyData = res;
    this.FeedService.filterFeed(res).then((res)=>{
      console.log('filtered',res);
      this.filtered = res;
      this.isLoaded = true;
      // this.FeedService.isLoaded = true;
    })
  });
  }
  


}