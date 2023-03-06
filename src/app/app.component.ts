import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, DatabaseReference } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'forum';
  liveFeed = {};
  @ViewChild('testForm') testForm !: NgForm
  firebaseConfig: {} = {
      apiKey: this.AppConfig.api_keys.firebase,
      authDomain: "ng-forum-2f491.firebaseapp.com",
      databaseURL: this.AppConfig.api_keys.firebase.databaseUrl,
      projectId: "ng-forum-2f491",
      storageBucket: "ng-forum-2f491.appspot.com",
      messagingSenderId: this.AppConfig.api_keys.firebase.messagingSenderId,
      appId: this.AppConfig.api_keys.firebase.appId,
      measurementId: this.AppConfig.api_keys.firebase.measurementId
};

  constructor (private AppConfig: AppConfigService){}

  ngOnInit(): void {
    const app = initializeApp(this.firebaseConfig);
    const db = getDatabase();
    const starCountRef = ref(db, 'users');
    onValue(starCountRef, (snapshot) => {
      this.liveFeed = snapshot.val();
      // updateStarCount(postElement, data);
      console.log(this.liveFeed);
    });
  }

  writeUserData(userId: number, name: string, email: string, imageUrl: string) {
    const db = getDatabase();
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }


  submit(){
    this.writeUserData(this.testForm.form.value.userId, this.testForm.form.value.name, this.testForm.form.value.mail, this.testForm.form.value.dp);
  }









}
