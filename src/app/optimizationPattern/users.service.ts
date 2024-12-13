import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

export interface User {
  name: string;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: User[] = [];

  constructor(private numberOfUsers: number = 50) {
    for (let i = 0; i < numberOfUsers; i++) {
      this.users.push({
        name: faker.name.fullName(),
        age: faker.datatype.number({ min: 18, max: 30 }),
      });
    }
  }

  getOddOrEven(isOdd = false): User[] {
    return this.users.filter((user) => (user.age % 2 === 1) === isOdd);
  }

  addUser(list: User[], name: string): User[] {
    return [{ name, age: faker.datatype.number({ min: 18, max: 30 }) }, ...list];
  }
}
