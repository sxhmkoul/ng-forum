import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @ViewChild('inputList') inputList!: ElementRef;
  todoListArray: string[] = [];
  doneListArray: string[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  onAddToList = () => {
    this.todoListArray.push(this.inputList.nativeElement.value);
    this.inputList.nativeElement.value = '';
  };

  onRemoveFromList = (event: any) => {
    console.log(event);
    if (!event.target.classList.contains('markedDone')) {
      event.target.classList.add('markedDone');
      this.todoListArray.push(
        ...this.todoListArray.splice(
          this.todoListArray.indexOf(
            event.target.textContent.replaceAll(' ', '')
          ),
          1
        )
      );
    } else {
      event.target.classList.remove('markedDone');
      this.todoListArray.unshift(
        ...this.todoListArray.splice(
          this.todoListArray.indexOf(
            event.target.textContent.replaceAll(' ', '')
          ),
          1
        )
      );
    }
  };
}
