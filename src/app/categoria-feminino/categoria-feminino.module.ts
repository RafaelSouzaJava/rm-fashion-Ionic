import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaFemininoPageRoutingModule } from './categoria-feminino-routing.module';

import { CategoriaFemininoPage } from './categoria-feminino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaFemininoPageRoutingModule
  ],
  declarations: [CategoriaFemininoPage]
})
export class CategoriaFemininoPageModule {}
