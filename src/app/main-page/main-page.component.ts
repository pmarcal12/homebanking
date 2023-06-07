import { Component, Input } from '@angular/core';
import { User, users } from '../user';
import { Movements } from '../movements';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent
{
  @Input() users: User[] = [];
}
