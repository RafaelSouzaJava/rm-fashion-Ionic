import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoFemininoPage } from './produto-feminino.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoFemininoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoFemininoPageRoutingModule {}
