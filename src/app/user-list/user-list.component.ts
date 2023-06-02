import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit 
{

  @Input() users: User[] = [];

  constructor() { }

  ngOnInit(): void 
  {

  }

  logIn(name: string, password: string)
  {
    if(!(name && password))
    {
      console.log("Please fill all the blanks");
      return;
    }
    console.log("Welcome to your homebanking system account by pm.");
  }

  signUp(name: string, email:string, password: string)
  {
    if(!(name && email && password))
    {
      console.log("Please fill all the blanks");
      return;
    }

    var userID: number = this.users.length;
    console.log("number of users: " + userID);
    userID++;

    const newUser: User = {name, email, password, userID};
    this.users.push(newUser)

    console.log("Users array len: " + this.users.length);
    console.log("User name: " + newUser.name);
    console.log("User email: " + newUser.email);
    console.log("User ID: " + newUser.userID);

    console.log("You're part of the family now!");

  }
}
