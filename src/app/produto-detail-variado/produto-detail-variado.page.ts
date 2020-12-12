import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProdutoVariadoService } from 'src/services/domain/produto.variado.service';
import { ProdutoVariadoDTO } from 'src/models/produto.variado.dto';
import { CartService } from 'src/services/domain/cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-produto-detail-variado',
  templateUrl: './produto-detail-variado.page.html',
  styleUrls: ['./produto-detail-variado.page.scss'],
})
export class ProdutoDetailVariadoPage implements OnInit {

  item: ProdutoVariadoDTO;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private produtoVariadoService: ProdutoVariadoService,
    public cartService: CartService,
    public navCtrl: NavController) { }

  ngOnInit() {
    let produto_id = ''
    this.activatedRoute.queryParams.subscribe( resp => produto_id = resp.produto_id)
    this.produtoVariadoService.findById(produto_id)
    .subscribe(response => {
      this.item = response;
    },
     error => {} );
  }

  addToCart(produto: ProdutoVariadoDTO) {
    this.cartService.addProdutoVar(produto);
    this.navCtrl.navigateRoot('/cart');
  }

}
