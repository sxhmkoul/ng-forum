import { Component, OnInit } from '@angular/core';
import { FeedService } from 'src/app/services/feed.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class InsightsComponent implements OnInit {
  constructor(
    public SharedService: SharedService,
    public FeedService: FeedService
  ) {}

  ngOnInit(): void {
    this.SharedService.subPageView = 'PF-INSGT';
  }

  isExpanded = false;
  currentCondition: string = 'piechart';
  conditions: string[] = ['piechart', 'histograph', 'bargraph-hor', 'summary'];
  setCondition = (conditionType: string) => {
    console.log(conditionType);
    this.currentCondition = conditionType;
  };

  switchExpand = () => (this.isExpanded = !this.isExpanded);
}
