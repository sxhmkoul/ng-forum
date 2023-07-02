import { NgFor } from '@angular/common';
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FeedService } from 'src/app/services/feed.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
})
export class NewPostComponent implements OnInit, AfterViewInit {
  @ViewChild('composerForm') composerForm!: NgForm;
  heading = 'Ask a question';
  desc = '';
  category = 'question';
  header = 'Ask it out';
  postComplete = false;

  constructor(
    private UserService: UserService,
    private FeedService: FeedService,
    private router: Router,
    public dialogRef: MatDialogRef<NewPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  // public get userInfo() {
  //   return this.UserService.userInfo;
  // }

  submitPost(form: NgForm) {
    // console.log(form);
    // console.log(this.UserService.userInfo);
    const userInfo = this.UserService.userInfoSubject.getValue();
    let config = {
      category: form.value.category,
      comments: [],
      desc: form.value.desc,
      dpUrl: '',
      postId: String(Math.floor(Math.random() * 10000000)),
      userId: userInfo?.userId,
      liked: false,
      name: userInfo?.first_name,
      question: form.value.heading,
      timeStamp: new Date().getTime(),
      work: userInfo?.profession,
    };
    this.FeedService.createFeed(config).subscribe((res) => {
      console.log(res);
      this.postComplete = true;
    });
  }

  ngOnInit(): void {
    // console.log(this.data);
    // console.log('this.UserService.userInfo from new post component',this.UserService.userInfo);
  }

  ngAfterViewInit() {
    console.log('Form initialized:', this.composerForm);
    // this.cdr.detectChanges();
  }

  closeDialog() {
    this.dialogRef.close();
    this.router.navigate(['/my-posts']);
  }

  categorySwitch() {
    console.log(this.composerForm.value.category);
    if (this.composerForm.value.category === 'question') {
      this.heading = 'Ask a question';
      this.header = 'Ask it out';
    } else if (this.composerForm.value.category === 'blog') {
      this.heading = 'Write a heading';
      this.header = 'Thanks for sharing';
    } else {
      this.heading = 'Write a title';
      this.header = "Can't wait to hear it";
    }
  }

  // ngOnInit(): void {
  //   const app = initializeApp(this.firebaseConfig);
  //   const db = getDatabase();
  //   const starCountRef = ref(db, 'users');
  //   onValue(starCountRef, (snapshot) => {
  //     this.liveFeed = snapshot.val();
  //     // updateStarCount(postElement, data);
  //     console.log(this.liveFeed);
  //   });
  // }

  // writeUserData(userId: number, name: string, email: string, query: string) {
  //   const db = getDatabase();
  //   set(ref(db, 'users/' + userId), {
  //     username: name,
  //     email: email,
  //     query : query
  //   });
  // }

  // submit(){
  //   this.writeUserData(this.testForm.form.value.userId, this.testForm.form.value.name, this.testForm.form.value.mail, this.testForm.form.value.query);
  // }
}
