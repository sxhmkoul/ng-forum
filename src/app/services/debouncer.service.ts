import { Injectable, OnInit } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DebouncerService {
  public debounce: Subject<any> = new Subject<any>();
  currentLogic !: any;


  constructor() { }


  
  public onDebounce(callback: (e:any) => void, debounceTimeMs: number): void {
    this.debounce
      .pipe(debounceTime(debounceTimeMs))
      .subscribe((e) => {
        callback(e);
      });
  }


}
