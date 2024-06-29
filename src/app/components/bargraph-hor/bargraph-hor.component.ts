import { Component, ElementRef, NgZone } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bargraph-hor',
  templateUrl: './bargraph-hor.component.html',
  styleUrls: ['./bargraph-hor.component.scss'],
})
export class BargraphHorComponent {
  private margin = { top: 20, right: 30, bottom: 40, left: 90 };
  private width = 460 - this.margin.left - this.margin.right;
  private height = 400 - this.margin.top - this.margin.bottom;
  // Static data
  private data = [
    { Type: 'Questions', Value: 8 },
    { Type: 'Blogs', Value: 15 },
    { Type: 'Stories', Value: 25 },
  ];

  private color: any = d3
    .scaleOrdinal()
    .domain(this.data.map((d) => d.Type))
    .range(['#ff7f0e', '#1f77b4', '#2ca02c']);

  constructor(private el: ElementRef, private ngZone: NgZone) {}

  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      this.createChart();
    });
  }

  ngOnDestroy() {
    // Clean up any event listeners or other resources for memory purposes
  }

  private createChart(): void {
    const element = this.el.nativeElement.querySelector('#chart-container');

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom)
      .append('g')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, (d: any) => d.Value)])
      .range([0, this.width]);
    svg
      .append('g')
      .attr('transform', `translate(0, ${this.height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');

    const y = d3
      .scaleBand()
      .range([0, this.height])
      .domain(this.data.map((d: any) => d.Type))
      .padding(0.1);
    svg.append('g').call(d3.axisLeft(y));

    svg
      .selectAll('myRect')
      .data(this.data)
      .join('rect')
      .attr('x', x(0))
      .attr('y', (d: any) => y(d.Type) || 0)
      .attr('height', y.bandwidth())
      .attr('fill', (d: any) => this.color(d.Type))
      .transition() // Apply transition for smooth animation
      .duration(1000) // Animation duration in milliseconds
      .attr('width', (d: any) => x(d.Value));
  }
}
