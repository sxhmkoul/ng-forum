import { Component } from '@angular/core';

@Component({
  selector: 'app-staging',
  templateUrl: './staging.component.html',
  styleUrls: ['./staging.component.scss'],
})
export class StagingComponent {
  currentCondition: string = 'piechart';
  conditions: string[] = ['piechart', 'histograph', 'bargraph-hor', 'summary'];
  setCondition = (conditionType: string) => {
    console.log(conditionType);
    this.currentCondition = conditionType;
  };
}
