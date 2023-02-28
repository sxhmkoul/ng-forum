import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue, DatabaseReference } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'forum';
  liveFeed = {};
  @ViewChild('testForm') testForm !: NgForm
  firebaseConfig = {
      apiKey: "AIzaSyD1LQ79aG3RhbQaVfqZGG1lN_KQMMc437o",
      authDomain: "ng-forum-2f491.firebaseapp.com",
      databaseURL: "https://ng-forum-2f491-default-rtdb.firebaseio.com",
      projectId: "ng-forum-2f491",
      storageBucket: "ng-forum-2f491.appspot.com",
      messagingSenderId: "577554456329",
      appId: "1:577554456329:web:ac9a986d58f9675b2dfdd8",
      measurementId: "G-E9Y09X9DZE"
};

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
