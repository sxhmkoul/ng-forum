import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { feedModal } from '../components/feed/feed.modal';

@Injectable({
  providedIn: 'root'
})
export class FeedService implements OnInit{
  dummyData: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
      // this.feedData();
  }

  fetchFeed = () => {
    return this.http.get<feedModal[]>('https://ng-backend-8a3aa-default-rtdb.firebaseio.com/feedData.json')
      
  }


}
