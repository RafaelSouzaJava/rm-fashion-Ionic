import { Component, OnInit } from '@angular/core';
import { ProdutoFemininoDTO } from 'src/models/produto.feminino.dto';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoFemininoService } from 'src/services/domain/produto.feminino.service';
import { CartService } from 'src/services/domain/cart.service';

@Component({
  selector: 'app-produto-detail-feminino',
  templateUrl: './produto-detail-feminino.page.html',
  styleUrls: ['./produto-detail-feminino.page.scss'],
})
export class ProdutoDetailFemininoPage implements OnInit {

  item: ProdutoFemininoDTO;

  constructor(public nacCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoFemininoService: ProdutoFemininoService,
    public cartService: CartService) { }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    let produto_id = ''
    this.activatedRoute.queryParams.subscribe( resp => produto_id = resp.produto_id)
    this.produtoFemininoService.findById(produto_id)
    .subscribe(response => {
      this.item = response;
    },
     error => {} );
  }

  addToCart(produto: ProdutoFemininoDTO) {
    this.cartService.addProdutoFem(produto);
    this.nacCtrl.navigateRoot('/cart');
  }

}
