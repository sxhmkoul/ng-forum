import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  constructor(public FeedService: FeedService, private AuthService: AuthService, private cdr: ChangeDetectorRef){}

  ngOnInit(): void {  
        this.fetchFeed();
  }

  fetchFeed = () => {
    this.FeedService.fetchFeed(this.token)
    .subscribe(response=>{
      this.data = response.reverse();
      this.FeedService.dummyData = response.reverse();
      this.dataLoaded = true;
      console.log('this.FeedService.dummyData my feed',this.FeedService.dummyData);
      // this.cdr.detectChanges();
    },
    error=>{
      console.log(error.error);
    }
    );
  }
}
