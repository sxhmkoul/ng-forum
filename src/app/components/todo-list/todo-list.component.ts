import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @ViewChild('inputList') inputList !: ElementRef;
  todoListArray : string[] = [''];
  doneListArray : string[] = [''];

  onAddToList = () => {
    this.todoListArray.push(this.inputList.nativeElement.value);
    this.inputList.nativeElement.value = '';
  }

  onRemoveFromList = (event: any) => {
    console.log(event);
    event.target.classList.add('markedDone');
    // this.todoListArray.splice(this.todoListArray.indexOf(event.target.textContent),this.todoListArray.indexOf(event.target.textContent) + 1);
    this.doneListArray.push(event.target.textContent);
  }

}
