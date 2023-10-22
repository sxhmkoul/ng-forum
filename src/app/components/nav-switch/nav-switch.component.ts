import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-switch',
  templateUrl: './nav-switch.component.html',
  styleUrls: ['./nav-switch.component.scss']
})
export class NavSwitchComponent {
  @Output() detechNavSwitchFlip : EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('feed') feedRef !: ElementRef;
  @ViewChild('blog') blog !: ElementRef;
  @ViewChild('story') story !: ElementRef;
  @ViewChild('navSwitchWrapper') navSwitchWrapper !: ElementRef;
  constructor(){}

  navSwitchFlipped = (mode: string, event: any) => {
    console.log('flipped' + mode);
    // let x = this.navSwitchWrapper.nativeElement.querySelector("[name='feed']");
    // console.log(x);
    // if(event.getAttribute('data-fn') == 'feed'){
    //   this.feedRef.nativeElement.classList.add('active');
    //   if(this.blog.nativeElement.classList.contains('active')){
    //     this.blog.nativeElement.classList.remove('active');
    //   } else {
    //     this.story.nativeElement.classList.remove('active');
    //   }
    // } else if(event.getAttribute('data-fn') == 'story'){
    //   this.story.nativeElement.classList.add('active');
    //   if(this.feedRef.nativeElement.classList.contains('active')){
    //     this.feedRef.nativeElement.classList.remove('active');
    //   } else {
    //     this.blog.nativeElement.classList.remove('active');
    //   }
    // } else {
    //   this.blog.nativeElement.classList.add('active');
    //   if(this.feedRef.nativeElement.classList.contains('active')){
    //     this.feedRef.nativeElement.classList.remove('active');
    //   } else {
    //     this.story.nativeElement.classList.remove('active');
    //   }
    // }
    this.detechNavSwitchFlip.emit(mode);
  }
}
