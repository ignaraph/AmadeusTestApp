import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationModule } from './registration/registration.module';
import { HotelesModule } from './hoteles/hoteles.module';
import { HotelesInterceptorService } from './hoteles/services/hotelesInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    HotelesModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HotelesInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
