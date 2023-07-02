import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { feedModal } from '../components/feed/feed.modal';
import { Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  isLoaded: boolean = false;
  dummyData!: feedModal[];
  testSubject: Subject<feedModal[]> = new Subject<feedModal[]>();
  localToken: string | null = localStorage.getItem('token');

  get parsedToken () {
    if (this.localToken !== null) {
      let parsedJson = JSON.parse(this.localToken)
      return parsedJson._token;
    } else {
      return null;
    }    
    
  }

  constructor(private http: HttpClient) { console.log('service loaded');}

  fetchFeed = (token : any) => {
    return this.http.get<feedModal[]>('https://ng-backend-8a3aa-default-rtdb.firebaseio.com/feedData.json').pipe(map(res=>{
      return Object.values(res);
    }))
  }

  createFeed = (config: any) => {
    return this.http.post('https://ng-backend-8a3aa-default-rtdb.firebaseio.com/feedData.json', {
      ...config
    })
  }

  filterFeed = async (feed: feedModal[]) => {
    return feed.filter((val: feedModal) => val.name === 'Saksham Koul');
    }


}
