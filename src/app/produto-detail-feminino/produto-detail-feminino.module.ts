import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoDetailFemininoPageRoutingModule } from './produto-detail-feminino-routing.module';

import { ProdutoDetailFemininoPage } from './produto-detail-feminino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoDetailFemininoPageRoutingModule
  ],
  declarations: [ProdutoDetailFemininoPage]
})
export class ProdutoDetailFemininoPageModule {}
