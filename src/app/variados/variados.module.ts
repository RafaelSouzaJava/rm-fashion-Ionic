import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VariadosPageRoutingModule } from './variados-routing.module';

import { VariadosPage } from './variados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VariadosPageRoutingModule
  ],
  declarations: [VariadosPage]
})
export class VariadosPageModule {}
