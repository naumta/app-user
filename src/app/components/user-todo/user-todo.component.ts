import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/shared/model/user-app.model';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.scss']
})
export class UserTodoComponent implements OnInit {

  @Input() todo!: ITodo;
  constructor() { }

  ngOnInit(): void {
  }

}
