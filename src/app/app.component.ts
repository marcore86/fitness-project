import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navigationSideMenu = ['menu', 'home'];
  title = 'app';
  toHaveALook ='https://www.awwwards.com/';
}
