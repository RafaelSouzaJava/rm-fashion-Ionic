import { Component, OnInit } from '@angular/core';
import { EnderecoDTO } from 'src/models/endereco.dto';
import { StorageService } from 'src/services/storage.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { NavController, ModalController } from '@ionic/angular';
import { PedidoDTO } from 'src/models/pedido.dto';
import { CartService } from 'src/services/domain/cart.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pick-address',
  templateUrl: './pick-address.page.html',
  styleUrls: ['./pick-address.page.scss'],
})
export class PickAddressPage implements OnInit {

  items: EnderecoDTO[];

  pedido: PedidoDTO;

  constructor(public storage : StorageService,
  public clienteService : ClienteService,
   public navCtrl: NavController,
    public cartService: CartService,
    private router: Router,    
    private activatedRoute: ActivatedRoute,
    public modalCtrl : ModalController) { }

  ngOnInit() {    
  }

  ionViewWillEnter() {
    let localUser = this.storage.getLocalUser();    
    if (localUser && localUser.email && localUser.token) {       
      this.clienteService.findByEmail(localUser.email)      
        .subscribe(response => {          
          this.items = response['enderecos'];
          let cart = this.cartService.getCart();
          this.pedido = {
            cliente: {id: response['id']},
            enderecoDeEntrega: null,
            pagamento: null,
            itemsFem: cart.itemsFem.map(x => {return {quantidade: x.quantidade, produto: {id: x.produto.id}} }),
            itemsMasc: cart.itemsMasc.map(x => {return {quantidade: x.quantidade, produto: {id: x.produto.id}}}),
            itemsSex: cart.itemsSex.map(x => {return {quantidade: x.quantidade, produto: {id: x.produto.id}}}),
            itemsVar: cart.itemVar.map(x => {return {quantidade: x.quantidade, produto: {id: x.produto.id}}}),
          };
        },
        error => {
          if (error.status == 403) {
            this.navCtrl.navigateRoot('/login');
          }
        });
    }
    else {
      this.navCtrl.navigateRoot('/login');
    }    
  }


  nextPage(item : EnderecoDTO) {
    
    this.pedido.enderecoDeEntrega = {id: item.id};    
    this.router.navigate(['/payment'], {queryParams: {pedido: this.pedido}});
    console.log(this.pedido);
  }

}
