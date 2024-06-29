import { Injectable } from '@angular/core';
import { menuMap } from '../components/menu-vertical/menu.modal';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  pageView: string = '';
  subPageView: string = '';
  menuMapping: menuMap[] = [
    { icon: 'fa-newspaper', text: 'Feed', routerLink: '/feed' },
    { icon: 'fa-clipboard', text: 'My Posts', routerLink: '/my-posts' },
    { icon: 'fa-heart', text: 'Liked', routerLink: '/liked' },
    { icon: 'fa-clipboard', text: 'Tags', routerLink: '/feed/tags' },
    { icon: 'fa-user', text: 'Profile', routerLink: '/profile' },
  ];
  formData = {};

  constructor() {}
}
