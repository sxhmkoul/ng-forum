import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input('type') type?: string;
  @Input('classes') classes?: string;
  @Input('size') size?: string;
  @Input('icon') icon?: string;
  @Input('bg') bg?: string;
}
