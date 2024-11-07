// todo.ts
export type TodoStatus = 'waiting' | 'in progress' | 'done';

export class Todo {
  constructor(
    public name = '',
    public content = '',
    public status: TodoStatus = 'waiting' 
  ) {}
}
