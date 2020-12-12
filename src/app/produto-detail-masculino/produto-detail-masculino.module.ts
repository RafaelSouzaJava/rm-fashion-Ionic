import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoDetailMasculinoPageRoutingModule } from './produto-detail-masculino-routing.module';

import { ProdutoDetailMasculinoPage } from './produto-detail-masculino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoDetailMasculinoPageRoutingModule
  ],
  declarations: [ProdutoDetailMasculinoPage]
})
export class ProdutoDetailMasculinoPageModule {}
