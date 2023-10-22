import { Component, Input, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-animator',
  templateUrl: './animator.component.html',
  styleUrls: ['./animator.component.scss']
})
export class AnimatorComponent implements OnInit{
  @Input('animation') animation: string = '';
  @Input('useLottie') useLottie: string = '';
  animationOptions: AnimationOptions = {
    path: ''
  };

  ngOnInit(): void {  
    if(this.useLottie){
      this.animationOptions = {path: `assets/animations/${this.animation}.json`};
    }
  }

}
