import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input('inheritClass') inheritClass = '';

  get getDynamicClass() {
    return { [this.inheritClass]: !!this.inheritClass };
  }
}
