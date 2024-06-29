import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss'],
})
export class BarGraphComponent implements AfterViewInit {
  @ViewChild('chart', { static: false })
  private chartContainer!: ElementRef;

  private data = [
    { month: 'January', posts: 12 },
    { month: 'February', posts: 17 },
    { month: 'March', posts: 26 },
    { month: 'April', posts: 31 },
    { month: 'May', posts: 15 },
    { month: 'June', posts: 29 },
    // ... add data for other months
  ];

  ngAfterViewInit() {
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;

    const margin = { top: 20, right: 20, bottom: 70, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
    const y = d3.scaleLinear().range([height, 0]);

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    x.domain(this.data.map((d) => d.month));
    y.domain([0, d3.max(this.data, (d) => d.posts) || 0]);

    svg
      .selectAll('.bar')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.month) || 0)
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.posts))
      .attr('height', (d) => height - y(d.posts));

    svg
      .append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '-.55em')
      .attr('transform', 'rotate(-45)');

    svg.append('g').call(d3.axisLeft(y));
  }
}
