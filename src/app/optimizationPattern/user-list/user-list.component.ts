import {Component,Input,Output,EventEmitter,ChangeDetectionStrategy,} from '@angular/core';
import { User } from '../users.service';
import Memoize from 'memo-decorator';

export const fibonacci = (n: number): number => {
  let a = 1, b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() usersCluster: string = '';
  @Input() users: User[] = [];
  @Output() add = new EventEmitter<string>();

  userFullName: string = '';

  addUser() {
    const trimmedName = this.userFullName.trim();
    if (!trimmedName) return; 
    if (this.users.some(user => user.name === trimmedName)) {
      console.warn('Duplicate name not added');
      return; 
    }
    this.add.emit(trimmedName);
    this.userFullName = '';
  }

  @Memoize()
  fibo(n: number): number {
    if (n < 0 || !Number.isInteger(n)) {
      throw new Error('Invalid input: n must be a non-negative integer.');
    }
    const fib = fibonacci(n);
    return fib;
  }
}
