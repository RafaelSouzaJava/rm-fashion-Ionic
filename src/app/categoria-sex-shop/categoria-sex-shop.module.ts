import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CategoriaSexShopPageRoutingModule } from './categoria-sex-shop-routing.module';

import { CategoriaSexShopPage } from './categoria-sex-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CategoriaSexShopPageRoutingModule
  ],
  declarations: [CategoriaSexShopPage]
})
export class CategoriaSexShopPageModule {}
