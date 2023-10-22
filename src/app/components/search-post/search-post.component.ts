import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, debounceTime } from 'rxjs';
import { DebouncerService } from 'src/app/services/debouncer.service';
import { FeedService } from 'src/app/services/feed.service';
import { feedModal } from '../feed/feed.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-post',
  templateUrl: './search-post.component.html',
  styleUrls: ['./search-post.component.scss'],
})
export class SearchPostComponent implements OnInit {
  @ViewChild('searchRef') searchRef?: ElementRef;
  searchParam = '';
  searchResult: any[] = [];

  constructor(
    private feedData: FeedService,
    private debouncer: DebouncerService,
    private Router: Router
  ) {}

  public get latestFeed() {
    const latest = this.feedData.dummyData;
    return [
      latest[latest.length - 1],
      latest[latest.length - 2],
      latest[latest.length - 3],
      latest[latest.length - 4],
      latest[latest.length - 5],
    ];
  }

  expandSearch = (e: any) => {
    this.debouncer.debounce.next(e);
  };

  ngOnInit() {
    this.debouncer.onDebounce((e) => {
      this.searchLogic(e);
    }, 500);
  }

  searchLogic = (e: any) => {
    // if (!e.target.value.length) {
    //   this.searchRef?.nativeElement.close();
    // }
    // this.searchRef?.nativeElement.showModal();
    this.searchResult = [];
    console.log('expanded', e.target.value);
    this.searchParam = e.target.value;
    this.feedData.dummyData.filter((val: feedModal) => {
      if (val.question.toLowerCase().includes(this.searchParam)) {
        console.log('found');
        this.searchResult.push(val);
      }
    });
    console.log(this.searchResult);
  };

  searchInit() {
    this.searchRef?.nativeElement.showModal();
  }

  gotoPost(feedId: any) {
    this.searchRef?.nativeElement.close();
    this.Router.navigate(['/feed/detail', feedId]);
  }
}
