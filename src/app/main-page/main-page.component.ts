import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User, users } from '../user';
import { Movements } from '../movements';

import { MovementService } from '../movement.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit
{

  loggedInUser: User | null = null;

  

  constructor(private route: ActivatedRoute, private movementService: MovementService){}

  ngOnInit()
  {
    this.loggedInUser = history.state.user;
    this.route.paramMap.subscribe((params) => {
      const user = history.state.user;
      if (user) {
        this.loggedInUser = user;
      }
    });      
  }

  deposit()
  {
    if (this.loggedInUser) {
      // open browser prompt so the user can introduce the amout to withdraw from the account.
      const amount = prompt("Enter the amount to deposit:");
      if (amount) {
        const depositAmount = parseFloat(amount); // type cast from string to float
        if (!isNaN(depositAmount)) //grants that the amount is a valid number
        {
          // create a new movement to add to user's list of movements
          const newMovement: Movements = {
            movNumber: this.loggedInUser.userMovs.length + 1,
            movType: 'Deposit',
            movDate: new Date(),
            movAmount: depositAmount
          };

          this.loggedInUser.userMovs.push(newMovement); // add the new movement to the list of movements
          this.loggedInUser.userBalance += depositAmount; // update user balance
        } 
        else {
          alert("Invalid amount. Please enter a valid number.");
        }
      } 
      else {
        alert("No amount entered.");
      }
    } else {
      console.log("404: User not found");
    }
  }

  withdraw()
  {
    if (this.loggedInUser) {
      // open browser prompt so the user can introduce the amout to withdraw from the account.
      const amount = prompt("Enter the amount to withdraw:");
      if (amount) {
        const withdrawAmount = parseFloat(amount);
        if (!isNaN(withdrawAmount)) //grants that the amount is a valid number
        {
          if (this.loggedInUser.userBalance >= withdrawAmount) // check if there is enough account balance to perform this withdrawl
          {
            // create a new movement to add to user's list of movements
            const newMovement: Movements = {
              movNumber: this.loggedInUser.userMovs.length + 1,
              movType: 'Withdraw',
              movDate: new Date(),
              movAmount: withdrawAmount
            };
            
            this.loggedInUser.userMovs.push(newMovement); // add the new movement to the list of movements
            this.loggedInUser.userBalance -= withdrawAmount; // update user balance
          } 
          else {
            alert('Amount unavailable.');
          }
        } 
        else 
        {
          alert("Invalid amount. Please enter a valid number.");
        }
      } 
      else 
      {
        alert("No amount entered.");
      }
    } else 
    {
      console.log("404: User not found");
    }
  }
}
