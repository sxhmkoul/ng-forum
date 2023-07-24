import { Injectable } from '@angular/core';

export interface tabData {
  route: string;
  label: string;
}

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  PROFILE_TABS: tabData[] = [
    { route: 'posts', label: 'Posts' },
    { route: 'stats', label: 'Insights' },
    { route: 'about', label: 'About' },
  ];
}
