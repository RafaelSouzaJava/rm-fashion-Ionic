import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoDetailSexShopPageRoutingModule } from './produto-detail-sex-shop-routing.module';

import { ProdutoDetailSexShopPage } from './produto-detail-sex-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoDetailSexShopPageRoutingModule
  ],
  declarations: [ProdutoDetailSexShopPage]
})
export class ProdutoDetailSexShopPageModule {}
