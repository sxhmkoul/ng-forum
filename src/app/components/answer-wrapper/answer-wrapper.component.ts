import { Component, Input } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { comments } from '../feed/feed.modal';

@Component({
  selector: 'app-answer-wrapper',
  templateUrl: './answer-wrapper.component.html',
  styleUrls: ['./answer-wrapper.component.scss']
})
export class AnswerWrapperComponent {
  @Input('comments') comments !: comments[];

  constructor(public FeedService: FeedService){}

}
