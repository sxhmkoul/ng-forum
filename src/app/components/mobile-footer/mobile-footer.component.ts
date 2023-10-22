import { Component } from '@angular/core';
import { menuMap } from '../menu-vertical/menu.modal';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-mobile-footer',
  templateUrl: './mobile-footer.component.html',
  styleUrls: ['./mobile-footer.component.scss'],
})
export class MobileFooterComponent {
  constructor(public SharedService: SharedService) {}
}
