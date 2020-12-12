import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoDetailVariadoPage } from './produto-detail-variado.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoDetailVariadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoDetailVariadoPageRoutingModule {}
