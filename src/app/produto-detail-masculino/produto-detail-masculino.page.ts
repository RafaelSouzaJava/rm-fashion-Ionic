import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoMasculinoService } from 'src/services/domain/produto.masculino.service';
import { ProdutoMasculinoDTO } from 'src/models/produto.masculino.dto';
import { CartService } from 'src/services/domain/cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produto-detail-masculino',
  templateUrl: './produto-detail-masculino.page.html',
  styleUrls: ['./produto-detail-masculino.page.scss'],
})
export class ProdutoDetailMasculinoPage implements OnInit {

  item: ProdutoMasculinoDTO;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoMasculinoService: ProdutoMasculinoService,
    public cartService: CartService,
    public nacCtrl: NavController) { }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    let produto_id = ''
    this.activatedRoute.queryParams.subscribe( resp => produto_id = resp.produto_id)
    this.produtoMasculinoService.findById(produto_id)
    .subscribe(response => {
      this.item = response;
    },
     error => {} );

  }

  addToCart(produto: ProdutoMasculinoDTO) {
    this.cartService.addProdutoMasc(produto);
    this.nacCtrl.navigateRoot('cart');
  }

}
