import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoDetailMasculinoPage } from './produto-detail-masculino.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoDetailMasculinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoDetailMasculinoPageRoutingModule {}
