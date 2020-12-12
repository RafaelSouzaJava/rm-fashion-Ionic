import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaMasculinoPageRoutingModule } from './categoria-masculino-routing.module';

import { CategoriaMasculinoPage } from './categoria-masculino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaMasculinoPageRoutingModule
  ],
  declarations: [CategoriaMasculinoPage]
})
export class CategoriaMasculinoPageModule {}
