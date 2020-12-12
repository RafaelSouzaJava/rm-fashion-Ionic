import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoFemininoPageRoutingModule } from './produto-feminino-routing.module';

import { ProdutoFemininoPage } from './produto-feminino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoFemininoPageRoutingModule
  ],
  declarations: [ProdutoFemininoPage]
})
export class ProdutoFemininoPageModule {}
