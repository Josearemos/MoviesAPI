import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BibliotecasPage } from './bibliotecas.page';

const routes: Routes = [
  {
    path: '',
    component: BibliotecasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BibliotecasPageRoutingModule {}
