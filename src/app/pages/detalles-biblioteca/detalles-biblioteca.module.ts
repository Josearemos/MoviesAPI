import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallesBibliotecaPageRoutingModule } from './detalles-biblioteca-routing.module';

import { DetallesBibliotecaPage } from './detalles-biblioteca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesBibliotecaPageRoutingModule
  ],
  declarations: [DetallesBibliotecaPage]
})
export class DetallesBibliotecaPageModule {}
