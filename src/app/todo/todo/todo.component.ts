import { Component, inject } from '@angular/core';
import { Todo, TodoStatus } from '../model/todo';
import { TodoService } from '../service/todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class TodoComponent {
  private todoService = inject(TodoService);


  todos = this.todoService.getTodos();
  todo = new Todo();

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  getTodosByStatus(status: TodoStatus): Todo[] {
    return this.todos().filter(todo => todo.status === status);
  }

  changeStatus(todo: Todo, status: TodoStatus) {
    this.todoService.changeStatus(todo, status);
  }
}
