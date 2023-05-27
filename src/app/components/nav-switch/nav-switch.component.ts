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
  constructor(){}

  navSwitchFlipped = (mode: string, event: any) => {
    console.log('flipped' + mode);
    if(event.getAttribute('name') == 'feed'){
      this.feedRef.nativeElement.classList.add('active');
      this.blog.nativeElement.classList.remove('active');
    } else {
      this.blog.nativeElement.classList.add('active');
      this.feedRef.nativeElement.classList.remove('active');
    }
    this.detechNavSwitchFlip.emit(mode);
  }
}
