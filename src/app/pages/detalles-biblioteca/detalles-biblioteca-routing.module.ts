import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesBibliotecaPage } from './detalles-biblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesBibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesBibliotecaPageRoutingModule {}
