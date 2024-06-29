import { Component, Input } from '@angular/core';
import { tabData } from 'src/app/utils.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input('tabs-data') tabsData!: tabData[];
}
