import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bibliotecas',
    pathMatch: 'full'
  },
  {
    path: 'bibliotecas',
    loadChildren: () => import('./pages/bibliotecas/bibliotecas.module').then( m => m.BibliotecasPageModule)
  },
  {
    path: 'bibliotecas/:id',
    loadChildren: () => import('./pages/detalles-biblioteca/detalles-biblioteca.module').then( m => m.DetallesBibliotecaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
