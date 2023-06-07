import { Component, Input } from '@angular/core';

import { FormBuilder,  FormGroup, Validators } from '@angular/forms';


import { Router, NavigationExtras} from '@angular/router';

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

  constructor(private router: Router, private formBuilder: FormBuilder)
  {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required], // 'name' form control with initial empty value and required validator
      password: ['', Validators.required] // 'password' form control with initial empty value and required validator
    });
 
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signUp() 
  {
    // collect the information from the signupForm inputs and store it
    const name = this.signupForm.get('name')?.value;
    const password = this.signupForm.get('password')?.value;

    
    // create a new user with the collected data - the other parameters don't need input information, those are automated.
    const newUser: User = { name: name, password: password, userID: this.users.length + 1, userBalance: 100, userMovs: []};

    // create a new movement - starting new account always with 100€ deposit.
    const newMovement: Movements = {movNumber: newUser.userMovs.length, movType: 'Deposit', movDate: new Date(), movAmount: 100};

    
    // add the movement to the user movements array
    newUser.userMovs.push(newMovement);
    // after completed the process, add the new user to the "fake backend" user array.
    this.users.push(newUser);

    // window.alert(users.length + " " + newUser.name + " " + newUser.password + " " + newUser.userMovs[0].movAmount + " " + newUser.userMovs[0].movType);

  }

   logIn() {
    
    // collect the information from the loginForm inputs and store it
    const name = this.loginForm.get('name')?.value;
    const password = this.loginForm.get('password')?.value;

    // read the users array and look for an entry with the same informations provided on the inputs
    const user = this.users.find(u => u.name === name && u.password === password);

    // in care ot the informations match, the user is logged into the aplications, moving to the main page
    if (user) {
      this.loggedInUser = user;
      console.log("Logged");

      // when navigating to the next page, loggedInUser must go too.
      const navigationExtras: NavigationExtras = {
        state: { user: this.loggedInUser }
      };

      this.router.navigate(['/main-page-component'], navigationExtras);
    } else {
      alert('Nome de usuário ou senha inválidos.');
    }
    
  }
}
