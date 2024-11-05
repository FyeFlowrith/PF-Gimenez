import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interfaces';
import { delay, Observable, of } from 'rxjs';


let DATABASE: User[] = [
  { id: 1,
    firstName: 'Usuario',
    lastName: 'Admin',
    email: 'usu-admin@test.com',
    password: 'pass1234',
    createdAt: new Date(),
    token: 'klrgjhlseo495340twlekrghwrgw123',
  },
];

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(DATABASE).pipe(delay(2000));
  }

  updateUserById(id: number, update: Partial<User>): Observable<User[]> {
    DATABASE = DATABASE.map((user) =>
      user.id === id ? {...user, ...update} : user
  );
  return of(DATABASE).pipe(delay(1000));
  }

  addUser(newUser: Omit<User, 'id' | 'createdAt'>): Observable<User[]> {
    const lastId = DATABASE.length > 0 ? Math.max(...DATABASE.map(user => user.id)) : 0;
    const userToAdd: User = {
      id: lastId + 1,
      ...newUser,
      createdAt: new Date()
    };
    DATABASE = [...DATABASE, userToAdd];
    return of(DATABASE).pipe(delay(1000));
  }

  removeUserById(id: number): Observable<User[]> {
    DATABASE = DATABASE.filter((user) => user.id !== id);
    return of(DATABASE).pipe(delay(1000));
  }
}