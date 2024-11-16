import { Component, inject, computed } from '@angular/core';
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

  waitingTodos = computed(() =>
    this.todos().filter(todo => todo.status === 'waiting')
  );

  inProgressTodos = computed(() =>
    this.todos().filter(todo => todo.status === 'in progress')
  );

  doneTodos = computed(() =>
    this.todos().filter(todo => todo.status === 'done')
  );

  addTodo() {
    this.todoService.addTodo(this.todo);
    this.todo = new Todo();
  }

  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }

  changeStatus(todo: Todo, status: TodoStatus) {
    this.todoService.changeStatus(todo, status);
  }
}
