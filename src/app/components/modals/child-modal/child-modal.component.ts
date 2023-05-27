import { Component } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-child-modal',
  templateUrl: './child-modal.component.html',
  styleUrls: ['./child-modal.component.scss']
})
export class ChildModalComponent {
  animationOptions: AnimationOptions = {
    path: 'assets/animations/empty.json',
  };

}
