import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VariadosPage } from './variados.page';

const routes: Routes = [
  {
    path: '',
    component: VariadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariadosPageRoutingModule {}
