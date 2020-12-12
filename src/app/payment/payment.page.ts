import { Component,  } from '@angular/core';
import {  NavController, MenuController, NavParams } from '@ionic/angular';
import { PedidoDTO } from '../../models/pedido.dto';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage {

  pedido: PedidoDTO;

  parcelas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  formGroup: FormGroup;
  

  constructor(
    public navCtrl: NavController,  
    public formBuilder: FormBuilder,
    public menu: MenuController,
    public activatedRoute: ActivatedRoute) {

     

      this.activatedRoute.params.subscribe((res) => {
        console.log('parans: ', res)
      })

    this.formGroup = this.formBuilder.group({
      numeroDeParcelas: [1, Validators.required],
      "type": ["pagamentoComCartao", Validators.required]
    });
  }

  nextPage() {
    
 
  }
}