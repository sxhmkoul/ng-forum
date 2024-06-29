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
export class NewPostComponent {
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

  submitPost(form: NgForm) {
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
}
