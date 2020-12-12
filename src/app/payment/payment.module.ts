import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { IonicModule, NavParams } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';
import { BrMaskerModule } from 'br-mask';
import { PaymentPage } from './payment.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,    
    IonicModule,
    PaymentPageRoutingModule,
    BrMaskerModule,    
    RouterModule
    
  ],
  declarations: [PaymentPage]
})
export class PaymentPageModule {}
