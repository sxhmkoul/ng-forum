import { Component, Input, OnInit } from '@angular/core';
import { feedModal } from './feed.modal';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit{
  constructor(public feedData: FeedService) {}
  @Input('filter') filter !: string;
  @Input('filteredFeed') filteredFeed !: feedModal[];
  filteredFeedData : feedModal[] = [];
  filteredBlogData : feedModal[] = [];
  filteredStoryData : feedModal[] = [];
  localFilteredData : feedModal[] = [];

  ngOnInit(): void {
    console.log('filteredFeed',this.filteredFeed);
    console.log('incoming filtered feed:', this.filteredFeedData);
      this.filterFeed();
      this.localFilteredData = [...this.filteredFeedData].reverse();
  }

  navSwitchCallback = (mode: string) => {
    if(mode === 'feed'){
      this.localFilteredData = [...this.filteredFeedData].reverse();
    } else if(mode === 'blog'){
      this.localFilteredData = [...this.filteredBlogData].reverse();
    }else {
      this.localFilteredData = [...this.filteredStoryData].reverse();
    }
  }

  filterFeed = () => {
    this.filteredFeed.filter((val)=>{
      if(val.category === 'question'){
        this.filteredFeedData.push(val);
      } else if(val.category === 'blog'){
        this.filteredBlogData.push(val);
      } else {
        this.filteredStoryData.push(val);

      }
    })
    console.log(this.filteredFeedData);
    console.log(this.filteredBlogData);
    console.log(this.filteredStoryData);
  }

}
