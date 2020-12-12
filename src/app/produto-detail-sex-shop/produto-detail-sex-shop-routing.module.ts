import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoDetailSexShopPage } from './produto-detail-sex-shop.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoDetailSexShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoDetailSexShopPageRoutingModule {}
