import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoVariadoPage } from './produto-variado.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoVariadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoVariadoPageRoutingModule {}
