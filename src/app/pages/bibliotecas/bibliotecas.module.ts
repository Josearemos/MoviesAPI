import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BibliotecasPageRoutingModule } from './bibliotecas-routing.module';

import { BibliotecasPage } from './bibliotecas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BibliotecasPageRoutingModule
  ],
  declarations: [BibliotecasPage]
})
export class BibliotecasPageModule {}
