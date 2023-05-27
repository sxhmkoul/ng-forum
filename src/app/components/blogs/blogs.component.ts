import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { feedModal } from '../feed/feed.modal';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit{
  blogPosts!: feedModal[];

  constructor(private feedData: FeedService){}

  ngOnInit(): void {
    this.blogPosts = this.feedData.dummyData.filter((val: feedModal)=>{
        if(val.category === 'blog'){
          return val;
        } else return;
      })
      console.log(this.blogPosts);
  }


}
