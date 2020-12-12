import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickAddressPageRoutingModule } from './pick-address-routing.module';
import { PickAddressPage } from './pick-address.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickAddressPageRoutingModule,
    RouterModule
    
  ],
  declarations: [PickAddressPage]
})
export class PickAddressPageModule {}
