import { Injectable, Signal, signal,inject } from '@angular/core';
import { Todo, TodoStatus } from '../model/todo';
import { LoggerService } from '../../services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private loggerService = inject(LoggerService);

  private todos = signal<Todo[]>([]);

  getTodos(): Signal<Todo[]> {
    return this.todos.asReadonly();
  }

  addTodo(todo: Todo): void {
    this.todos.update(currentTodos => [...currentTodos, todo]);
  }

  deleteTodo(todo: Todo): boolean {
    const currentTodos = this.todos();
    const index = currentTodos.indexOf(todo);
    if (index > -1) {
      this.todos.update(todos => todos.filter(t => t !== todo));
      return true;
    }
    return false;
  }

  changeStatus(todo: Todo, status: TodoStatus): void {
    this.todos.update(currentTodos =>
      currentTodos.map(t => (t === todo ? { ...t, status } : t))
    );
  }

  logTodos() {
    this.loggerService.logger(this.todos());
  }
}
