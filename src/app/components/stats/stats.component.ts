import { Component } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent {
  isExpanded = false;
  currentCondition: string = 'piechart';
  conditions: string[] = ['piechart', 'histograph', 'bargraph-hor', 'summary'];
  setCondition = (conditionType: string) => {
    console.log(conditionType);
    this.currentCondition = conditionType;
  };

  constructor(public SharedService: SharedService) {}

  switchExpand = () => (this.isExpanded = !this.isExpanded);
}
