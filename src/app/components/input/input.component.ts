import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input('type') type!: string;
  @Input('name') name!: string;
  @Input('showLabel') showLabel!: boolean;
  @Input('incomingId') incomingId: string = '';
  @Input('incomingTitle') incomingTitle?: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  test = ($event: Event) => {
    this.callback.emit($event);
  };
}
