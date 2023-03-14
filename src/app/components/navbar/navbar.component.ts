import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  todoSwitchNav: boolean = false;

  activateTodo = () => {
    this.todoSwitchNav = !this.todoSwitchNav;
  }
}
