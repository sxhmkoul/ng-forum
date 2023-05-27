import { Component, Input } from '@angular/core';
import { comments, feedModal } from '../feed/feed.modal';

@Component({
  selector: 'app-comment-wrapper',
  templateUrl: './comment-wrapper.component.html',
  styleUrls: ['./comment-wrapper.component.scss']
})
export class CommentWrapperComponent {
  @Input('comments') comments !: comments[];

}
