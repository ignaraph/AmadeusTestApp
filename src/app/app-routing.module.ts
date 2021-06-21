import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelesDetalleComponent } from './hoteles/components/hoteles-detalle/hoteles-detalle.component';
import { HotelesListadoComponent } from './hoteles/components/hoteles-listado/hoteles-listado.component';

const routes: Routes = [
  {
    path: 'hoteles',
    component: HotelesListadoComponent,
    pathMatch: 'full'
  },
  {
    path: 'hoteles/:hotelId',
    component: HotelesDetalleComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
