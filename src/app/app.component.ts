import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './movement-style.css']
})
export class AppComponent {
  title = 'homebanking';

  // userList: User[] =
  // [
  //   {
  //     name: "admin",
  //     email: "admin@admin.pt",
  //     password: "admin",
  //     userID: 0,
  //   }
  // ];
}
