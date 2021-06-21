import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isRegistered:boolean = true;

  @Output() onLogIn: EventEmitter<boolean> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  register() {
    const oldIsRegistered = this.isRegistered
    this.isRegistered = !oldIsRegistered;
  }

  login() {
    this.onLogIn.emit(true);
  }


}
