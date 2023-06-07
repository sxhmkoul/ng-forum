import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { feedModal } from '../feed/feed.modal';
import { FeedService } from 'src/app/services/feed.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.scss']
})
export class FeedDetailComponent implements OnInit{
  currentPost: feedModal[] = [];
  currentPostPreload : feedModal[] = [];
  // AuthService: any;
  token: any;

constructor(private routes: ActivatedRoute, private feedData: FeedService, private AuthService: AuthService){}

ngOnInit(): void {
  this.AuthService.userData.subscribe((res: any)=>{
    this.token = res?.getToken;
  })

  if(!(this.feedData.dummyData && this.feedData.dummyData.length)){
    this.feedData.fetchFeed(this.token).subscribe(res=>{
      this.feedData.testSubject.next(res);
    })

    this.feedData.testSubject.subscribe(res=>{
      this.currentPost = res.filter((currVal: feedModal)=>{
        if(currVal.id == this.currentId){
          return currVal;
        } else return;
      })
    })


  }
  this.currentPost = this.feedData.dummyData.filter((currVal: feedModal)=>{
    if(currVal.id == this.currentId){
      return currVal;
    } else return;
  })
}

currentId: string = this.routes.snapshot.params['id'];

}
