import { Component, OnDestroy } from '@angular/core';
import { menuMap } from '../menu-vertical/menu.modal';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NewPostComponent } from '../new-post/new-post.component';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-menu-wrapper',
  templateUrl: './menu-wrapper.component.html',
  styleUrls: ['./menu-wrapper.component.scss'],
})
export class MenuWrapperComponent {
  menuMapping: menuMap[] = [
    { icon: 'fa-newspaper', text: 'Feed', routerLink: '/feed' },
    { icon: 'fa-clipboard', text: 'My Posts', routerLink: '/my-posts' },
    { icon: 'fa-heart', text: 'Liked', routerLink: '/liked' },
    // { icon: 'fa-clipboard', text: 'Tags', routerLink: '/feed/tags' },
    { icon: 'fa-user', text: 'Profile', routerLink: '/profile' },
  ];
  test = '';
  constructor(public dialog: MatDialog, public state: StateService) {}

  openDialog() {
    const dialogRef = this.dialog.open(NewPostComponent, {
      data: event,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Dialog result:', result);
    });
  }
}
