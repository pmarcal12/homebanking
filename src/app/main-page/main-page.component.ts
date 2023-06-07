import { Component, Input } from '@angular/core';
import { User, users } from '../user';
import { Movements } from '../movements';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent
{
  @Input() users: User[] = [];

  openDepositDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { action: 'deposit' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deposit(result.amount);
      }
    });
  }
}
