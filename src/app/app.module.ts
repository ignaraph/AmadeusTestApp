import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from '../registration/registration.module';
import { HotelesModule } from './hoteles/hoteles.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    HotelesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
