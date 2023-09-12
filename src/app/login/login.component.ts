import { Component, OnInit } from '@angular/core';
import { HomePageModule } from '../home/home.module';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
export class PageOneComponent {
  component = HomeComponent;
}