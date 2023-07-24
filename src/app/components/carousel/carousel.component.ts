import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  @Input('conditions') conditions: string[] = [];
  @Output() conditionSwitch: EventEmitter<string> = new EventEmitter<string>();
  index = 1;
  rev_index = this.conditions.length - 1;
  numberOfConditions = this.conditions.length - 1;
  constructor() {}

  next = () => {
    if (this.index <= this.conditions.length - 1) {
      this.conditionSwitch.emit(this.conditions[this.index]);
      this.index++;
      this.rev_index = this.index - 2;
    } else {
      this.index = 0;
      this.next();
    }
  };

  back = () => {
    if (this.rev_index >= 0) {
      this.conditionSwitch.emit(this.conditions[this.rev_index]);
      this.rev_index--;
      this.index = this.rev_index + 2;
    } else {
      this.rev_index = this.conditions.length - 1;
      this.back();
    }
  };
}
