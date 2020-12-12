import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaSexShopPage } from './categoria-sex-shop.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaSexShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaSexShopPageRoutingModule {}
