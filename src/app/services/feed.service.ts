import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { feedModal } from '../components/feed/feed.modal';
import { Subject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  isLoaded: boolean = false;
  dummyData!: feedModal[];
  RTDB_URL = process.env['NEXT_PUBLIC_api_keys_firebase_databaseUrl'];
  testSubject: Subject<feedModal[]> = new Subject<feedModal[]>();
  localToken: string | null = localStorage.getItem('token');

  get parsedToken() {
    if (this.localToken !== null) {
      let parsedJson = JSON.parse(this.localToken);
      return parsedJson._token;
    } else {
      return null;
    }
  }

  constructor(private http: HttpClient) {
    console.log('service loaded');
  }

  fetchFeed = (token: any) => {
    return this.http.get<feedModal[]>(`${this.RTDB_URL}/feedData.json`).pipe(
      map((res) => {
        return Object.values(res);
      })
    );
  };

  fetchFeedByUserId = (userId?: string) => {
    return this.http
      .get<feedModal[]>(
        `${this.RTDB_URL}/feedData.json?orderBy=%22userId%22&equalTo=%22${userId}%22
`
      )
      .pipe(
        map((res) => {
          return Object.values(res);
        })
      );
  };

  createFeed = (config: any) => {
    return this.http.post(`${this.RTDB_URL}/feedData.json`, {
      ...config,
    });
  };

  filterFeed = async (feed: feedModal[]) => {
    return feed.filter((val: feedModal) => val.name === 'Saksham Koul');
  };
}
