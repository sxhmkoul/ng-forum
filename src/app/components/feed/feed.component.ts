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
  localFilteredData : feedModal[] = [];

  ngOnInit(): void {
    console.log('incoming filtered feed:', this.filteredFeedData);
      this.filterFeed();
      this.localFilteredData = [...this.filteredFeedData];
  }

  navSwitchCallback = (mode: string) => {
    if(mode === 'feed'){
      this.localFilteredData = [...this.filteredFeedData];
    } else {
      this.localFilteredData = [...this.filteredBlogData];
    }
  }

  filterFeed = () => {
    this.filteredFeed.filter((val)=>{
      if(val.category === 'question'){
        this.filteredFeedData.push(val);
      } else {
        this.filteredBlogData.push(val);
      }
    })
  }

}
