import {
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { menuMap } from '../../menu-vertical/menu.modal';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent {
  hamburgerSwitch = false;
  constructor() {}

  flipHamburger = () => {
    this.hamburgerSwitch = !this.hamburgerSwitch;
  };
}
