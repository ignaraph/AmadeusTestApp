import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelesListadoComponent } from './components/hoteles-listado/hoteles-listado.component';
import { HotelesDetalleComponent } from './components/hoteles-detalle/hoteles-detalle.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HotelesListadoComponent,
    HotelesDetalleComponent
  ],
  exports: [
    HotelesListadoComponent,
    HotelesDetalleComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HotelesModule { }
