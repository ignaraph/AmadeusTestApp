import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logged:boolean = true;

  title = 'amadeus-app';

  logIn() {
    const oldLogged = this.logged;
    this.logged = !oldLogged;
  }
}
