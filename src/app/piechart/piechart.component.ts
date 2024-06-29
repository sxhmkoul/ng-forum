import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as d3 from 'd3';

interface PieDatum {
  label: string;
  count: number;
}

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements AfterViewInit {
  @ViewChild('chart', { static: false })
  private chartContainer!: ElementRef;

  private data: PieDatum[] = [
    { label: 'MyPosts', count: 37 },
    { label: 'Total Posts', count: 145 },
  ];

  private total = 37 + 145;

  ngAfterViewInit() {
    this.createChart();
  }

  private createChart(): void {
    const element = this.chartContainer.nativeElement;

    const width = 250;
    const height = 250;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const color = d3.scaleOrdinal(['#AB3E5B', '#FFC154']);

    const pie = d3.pie<PieDatum>().value((d: PieDatum) => d.count);

    const arc = d3
      .arc<d3.PieArcDatum<PieDatum>>()
      .innerRadius(0)
      .outerRadius(radius);

    const arcs = svg
      .selectAll('.arc')
      .data(pie(this.data))
      .enter()
      .append('g')
      .attr('class', 'arc');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i.toString()))
      .transition()
      .duration(1000)
      .attrTween('d', function (d) {
        const i = d3.interpolate(d.startAngle, d.endAngle);
        return function (t) {
          d.endAngle = i(t);
          const pathData = arc(d);
          return pathData ? pathData : '';
        };
      });

    arcs
      .append('text')
      .attr('transform', (d) => {
        console.log('value of d', d);
        console.log('value of centroid', arc.centroid(d));
        return 'translate(' + arc.centroid(d) + ')';
      })
      .attr('dy', '.35em')
      .style('font-size', '1rem') // adjust to desired font size
      .style('font-weight', '700') // adjust to desired font size
      .style('text-anchor', 'middle')
      .text((d) => {
        const percentage = (d.data.count / this.total) * 100;
        return percentage.toFixed(1) + '%'; // Formats the percentage to two decimal places
      });
  }
}
