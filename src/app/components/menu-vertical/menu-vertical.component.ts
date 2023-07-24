import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-vertical',
  templateUrl: './menu-vertical.component.html',
  styleUrls: ['./menu-vertical.component.scss'],
})
export class MenuVerticalComponent {
  @Input('mapping') mapping: any;
}
