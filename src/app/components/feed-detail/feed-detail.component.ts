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
  feedFetched = false;
  token: any;

constructor(private routes: ActivatedRoute, private feedData: FeedService, private AuthService: AuthService){}
currentId: string = this.routes.snapshot.params['id'];

ngOnInit(): void {
  this.AuthService.userData.subscribe((res: any)=>{
    this.token = res?.getToken;
  })

  if(!(this.feedData.dummyData && this.feedData.dummyData.length)){
    this.feedData.fetchFeed(this.token).subscribe(res=>{
      this.feedData.testSubject.next(res);
      this.currentPost = res.filter((currVal: feedModal)=>{
        if(currVal.postId == this.currentId){
          this.feedFetched = true;
          return currVal;
        } else return;
      })
    })

    // this.feedData.testSubject.subscribe(res=>{
    //   this.currentPost = res.filter((currVal: feedModal)=>{
    //     if(currVal.id == this.currentId){
    //       return currVal;
    //     } else return;
    //   })
    // },
    // error=>{
    //   alert(error.error);
    // })


  }else {
    this.feedFetched = true;
    this.currentPost = this.feedData.dummyData.filter((currVal: feedModal)=>{
      if(currVal.postId == this.currentId){
        return currVal;
      } else return;
    })
  }
}


}
