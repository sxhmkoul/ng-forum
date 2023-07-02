import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  pageView: string = '';
  formData = {};

  constructor() { }
}
