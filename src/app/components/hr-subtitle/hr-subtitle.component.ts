import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hr-subtitle',
  templateUrl: './hr-subtitle.component.html',
  styleUrls: ['./hr-subtitle.component.scss']
})
export class HrSubtitleComponent {
  @Input('subtitle') subtitle: string = '';
  @Input('count') count: number = 0;

}
