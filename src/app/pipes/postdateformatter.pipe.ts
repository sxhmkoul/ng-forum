import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postdateformatter',
})
export class PostdateformatterPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    if (!value || !Number(value)) {
      return '1y';
    }
    let currentTime = new Date().getTime();
    let dateDiff = Math.floor(currentTime - +value);
    let formattedDateDiff = this.formatTime(dateDiff);
    return this.checkDuration(formattedDateDiff);
  }

  checkDuration = (date: number) => {
    if (date >= 7) {
      let duration = Math.floor(date / 7);
      return String(duration) + 'w';
    } else if (date < 1 && date * 24 * 100 > 60) {
      return Math.floor(date * 24) + 'h';
    } else if (date < 1 && date * 24 * 100 <= 60) {
      if (Math.floor(date * 24 * 100) === 0) {
        return 'Just now';
      }
      return Math.floor(date * 24 * 100) + 'm';
    } else {
      return String(Math.floor(date)) + 'd';
    }
  };

  formatTime = (time: number) => {
    let duration = time / (1000 * 60 * 60 * 24);
    return duration;
  };
}
