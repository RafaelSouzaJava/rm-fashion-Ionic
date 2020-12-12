import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutoMasculinoPage } from './produto-masculino.page';

const routes: Routes = [
  {
    path: '',
    component: ProdutoMasculinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdutoMasculinoPageRoutingModule {}
