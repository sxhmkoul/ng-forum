import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

export interface DataPoint {
  month: string;
  posts: number;
}

@Component({
  selector: 'app-histograph',
  templateUrl: './histograph.component.html',
  styleUrls: ['./histograph.component.scss'],
})
export class HistographComponent implements AfterViewInit {
  @ViewChild('chart', { static: false })
  private chartContainer!: ElementRef;

  private data = [
    { month: 'May 22', posts: 12 },
    { month: 'June 22', posts: 17 },
    { month: 'July 22', posts: 22 },
    { month: 'August 22', posts: 13 },
    { month: 'September 22', posts: 26 },
    { month: 'October 22', posts: 35 },
    { month: 'November 22', posts: 11 },
    { month: 'December 22', posts: 19 },
    { month: 'January 23', posts: 20 },
    { month: 'February 23', posts: 22 },
    { month: 'March 23', posts: 37 },
    { month: 'April 23', posts: 34 },
  ];

  ngAfterViewInit() {
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;

    const tooltip = d3
      .select('app-histograph')
      .append('div')
      .attr('class', 'tooltips')
      .style('opacity', 0)
      .style('position', 'absolute');

    const margin = { top: 10, right: 30, bottom: 70, left: 40 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleBand()
      .domain(this.data.map((d) => d.month))
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, (d: any) => d.posts)])
      .range([height, 0]);
    svg.append('g').call(d3.axisLeft(y));

    svg
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d: any) => x(d.month) || 0)
      .attr('width', x.bandwidth())
      .attr('y', height) // start from the bottom
      .attr('height', 0) // initial height is 0
      .style('fill', '#69b3a2')
      .on('mouseover', function (event, d: DataPoint) {
        console.log(d);
        tooltip.transition().duration(200).style('opacity', 0.9);
        tooltip
          .html('Month: ' + d.month + '<br/>Posts: ' + d.posts)
          .style('left', d3.pointer(event)[0] + 50 + 'px')
          .style('top', 0 + 'px');
      })
      .on('mousemove', function (event, d) {
        tooltip
          .style('left', d3.pointer(event)[0] + 28 + 'px')
          .style('top', 0 + 'px');
      })
      .on('mouseout', function (event, d) {
        tooltip.transition().duration(500).style('opacity', 0);
      })
      .transition() // start a transition
      .duration(1000) // duration of 1 second
      .attr('y', (d) => y(d.posts))
      .attr('height', (d) => height - y(d.posts));

    svg
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-90)');

    svg
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.month) || 0)
      .attr('width', x.bandwidth())
      .attr('y', (d) => y(d.posts))
      .attr('height', (d) => height - y(d.posts))
      .style('fill', '#69b3a2');

    console.log('data', this.data);
  }
}
