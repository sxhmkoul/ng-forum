import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserConfig } from '../modals/user-config.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { feedModal } from '../components/feed/feed.modal';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  ngBackend: string = process.env['api_keys_firebase_databaseUrl'] ?? '';
  apiKey = process.env['api_keys_firebase_firebase_rtdb'];
  userInfoSubject = new BehaviorSubject<UserConfig | null>(null);
  userInfo!: UserConfig;

  constructor(private http: HttpClient) {}

  // get getUserInfo() {
  //   return this.userInfoSubject.getValue();
  // }

  createUser = (signupForm: any) => {
    return this.http.put(
      `${this.ngBackend}/users/${signupForm.username}.json`,
      {
        // displayPicture : signupForm.dp,
        first_name: signupForm.first_name,
        last_name: signupForm.last_name,
        country: signupForm.country,
        userId: String(Math.floor(Math.random() * 10000000)),
        profession: signupForm.profession,
        experience: signupForm.experience,
        username: signupForm.username,
        email: signupForm.email,
      }
    );
  };

  fetchUser = (email: string) => {
    console.log(email);

    return this.http.get(
      `${
        this.ngBackend
      }/users.json?orderBy="email"&equalTo="${encodeURIComponent(email)}"`
    );
  };

  filterFeed = async (feed: feedModal[]) => {
    const filterResult = feed.filter(
      (val: feedModal) => val.userId === this.userInfoSubject.getValue()?.userId
    );
    return filterResult;
  };
}
