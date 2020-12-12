import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoVariadoPageRoutingModule } from './produto-variado-routing.module';

import { ProdutoVariadoPage } from './produto-variado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoVariadoPageRoutingModule
  ],
  declarations: [ProdutoVariadoPage]
})
export class ProdutoVariadoPageModule {}
