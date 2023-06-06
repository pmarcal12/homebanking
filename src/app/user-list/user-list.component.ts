// import { Component, OnInit, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { User, users } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit 
// export class UserListComponent
{

  // @Input() users: User[] = [];

  users = [...users];

  constructor(private route: ActivatedRoute,) { }

  ngOnInit(): void 
  {
    const routeParams = this.route.snapshot.paramMap;
  }

  logIn(name: string, password: string)
  {
    if(!(name && password))
    {
      console.log("Please fill all the blanks");
      return;
    }
    else
    {
      for(let i = 0; i < users.length; i++)
      {
        if(users[i].name == name || users[i].password == password)
        {
          // add routing here
          window.alert("Welcome " + users[i].name + " to your homebanking system account by pm.");
        }
        else if(i == users.length-1 && (users[i].name != name || users[i].password != password))
        {
          window.alert("Incorrect name or password...")
        }
      }
    }
    
  }

  // signUp(name: string, email:string, password: string)
  signUp(name: string, password: string)
  {
    // if(!(name && email && password))
    if(!(name && password))
    {
      console.log("Please fill all the blanks");
      return;
    }

    var userID: number = this.users.length;
    console.log("number of users: " + userID);
    userID++;

    // const newUser: User = {name, email, password, userID};
    const newUser: User = {name, password, userID};
    this.users.push(newUser)

    // console.log("Users array len: " + this.users.length);
    // console.log("User name: " + newUser.name);
    // // console.log("User email: " + newUser.email);
    // console.log("User ID: " + newUser.userID);

    window.alert("You're part of the family now, " + newUser.name + "!");

  }
}
