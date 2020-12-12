import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaFemininoPage } from './categoria-feminino.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaFemininoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriaFemininoPageRoutingModule {}
