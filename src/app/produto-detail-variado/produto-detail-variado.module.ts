import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoDetailVariadoPageRoutingModule } from './produto-detail-variado-routing.module';

import { ProdutoDetailVariadoPage } from './produto-detail-variado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoDetailVariadoPageRoutingModule
  ],
  declarations: [ProdutoDetailVariadoPage]
})
export class ProdutoDetailVariadoPageModule {}
