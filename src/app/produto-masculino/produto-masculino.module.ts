import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoMasculinoPageRoutingModule } from './produto-masculino-routing.module';

import { ProdutoMasculinoPage } from './produto-masculino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoMasculinoPageRoutingModule
  ],
  declarations: [ProdutoMasculinoPage]
})
export class ProdutoMasculinoPageModule {}
