import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DebouncerService } from 'src/app/services/debouncer.service';
import { FeedService } from 'src/app/services/feed.service';
import { feedModal } from '../feed/feed.modal';

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.scss']
})
export class SearchPostComponent implements OnInit{
searchParam = '';
searchResult: any[] = [];

constructor( private feedData: FeedService, private debouncer: DebouncerService){}

expandSearch = (e: any) => {
  this.debouncer.debounce.next(e);
}

ngOnInit() {
  this.debouncer.onDebounce((e) => {
    this.searchLogic(e);
  },500);
}

searchLogic = (e: any) => {
  this.searchResult = [];
  console.log('expanded',e.target.value);
  this.searchParam = e.target.value;
  this.feedData.dummyData.filter((val: feedModal)=>{
    if((val.question).toLowerCase().includes(this.searchParam)){
      console.log('found');
      this.searchResult.push(val.question);
    }
  })
  console.log(this.searchResult);
}



}
