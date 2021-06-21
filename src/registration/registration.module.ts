import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent
  ],
  exports: [
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class RegistrationModule { }
