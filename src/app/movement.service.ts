import { Injectable } from '@angular/core';
import { User, users } from './user';
import { Movements } from './movements';

@Injectable({
  providedIn: 'root'
})
export class MovementService 
{
  private users: User[] = [];

  constructor() {
    this.users = users;
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  deposit(user: User, amount: number)
  {
    const newMovement: Movements = {
      movNumber: user.userMovs.length + 1,
      movType: 'Deposit',
      movDate: new Date(),
      movAmount: amount
    };

    user.userMovs.push(newMovement);
    user.userBalance += amount;
  }

  withdraw(user: User, amount: number)
  {
    if (user.userBalance >= amount) {
      const newMovement: Movements = {
        movNumber: user.userMovs.length + 1,
        movType: 'Withdraw',
        movDate: new Date(),
        movAmount: amount
      };

      user.userMovs.push(newMovement);
      user.userBalance -= amount;
    } else {
      alert('Saldo insuficiente para saque.');
    }
  }
}
