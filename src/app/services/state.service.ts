import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  isLoaded: boolean = false;
  constructor() {}

  get ifMobile() {
    if (
      navigator.userAgent.toLowerCase().includes('mobile') &&
      window.innerWidth < 850
    ) {
      return true;
    }
    return false;
  }
}
