import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoDetailFemininoPage } from './produto-detail-feminino.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoDetailFemininoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoDetailFemininoPageRoutingModule {}
