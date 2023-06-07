import { Component, OnInit, Input, Output } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { User, users } from '../user';
import { Movements } from '../movements';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  @Input() users: User[] = [];
  loggedInUser: User | null = null;

  loginForm!: FormGroup;
  signupForm!: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      loginGroup: this.formBuilder.group({
        name: ['', Validators.required],
        password: ['', Validators.required]
      })
    });
  
    this.signupForm = this.formBuilder.group({
      signupGroup: this.formBuilder.group({
        name: ['', Validators.required],
        password: ['', Validators.required]
      })
    });
  }

  signUp(/*name: string, password: string*/) 
  {
    /* This function is recieving all the data correctly from the forms. But it is not storing it anywhere */
    const name = this.signupForm.get('name')?.value;
    const password = this.signupForm.get('password')?.value;

    

    const newUser: User = { name: name, password: password, userID: this.users.length + 1, userBalance: 0, userMovs: []};

    const newMovement: Movements = {movNumber: newUser.userMovs.length+1, movType: 'Deposit', movDate: new Date(), movAmount: 100};

    

    newUser.userMovs.push(newMovement);
    this.users.push(newUser);

    window.alert(users.length + " " + newUser.name + " " + newUser.password + " " + newUser.userMovs[0].movAmount + " " + newUser.userMovs[0].movType);
    // for(let i = 0; i < users.length; i++)
    // {
    //   window.alert(users[i].name + " " + users[i].userBalance + " " + users[i].);
      
    // }

  }

   logIn(/*name: string, password: string*/) {
    

    const name = this.loginForm.get('name')?.value;
    const password = this.loginForm.get('password')?.value;

    const user = this.users.find(u => u.name === name && u.password === password);

    if (user) {
      this.loggedInUser = user;
      this.router.navigate(['/main-page-component']);
    } else {
      alert('Nome de usuário ou senha inválidos.');
    }
  }
}
