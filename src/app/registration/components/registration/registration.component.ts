import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registered:boolean = false;

  @Input() isRegistered = false;
  @Output() onRegister:EventEmitter<boolean> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }

  register() {
    this.registered = true;
    setTimeout(() => {
      this.onRegister.emit(true);
    },1000)
  }



}
