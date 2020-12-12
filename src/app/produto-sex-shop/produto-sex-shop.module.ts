import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdutoSexShopPageRoutingModule } from './produto-sex-shop-routing.module';

import { ProdutoSexShopPage } from './produto-sex-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdutoSexShopPageRoutingModule
  ],
  declarations: [ProdutoSexShopPage]
})
export class ProdutoSexShopPageModule {}
