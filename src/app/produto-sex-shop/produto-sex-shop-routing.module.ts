import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoSexShopPage } from './produto-sex-shop.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoSexShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoSexShopPageRoutingModule {}
