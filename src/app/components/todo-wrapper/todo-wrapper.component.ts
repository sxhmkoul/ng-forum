import { Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-wrapper',
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.scss'],
})
export class TodoWrapperComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  get showStats() {
    // let status = this.router.url.includes('/profile');
    let status = this.route.snapshot.routeConfig?.path === 'profile';
    return !status;
  }
}
