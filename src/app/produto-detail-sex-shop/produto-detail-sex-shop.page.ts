import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutoSexShopDTO } from 'src/models/produto.sexshop.dto';
import { ProdutoSexShopService } from 'src/services/domain/produto.sexshop.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/services/domain/cart.service';

@Component({
  selector: 'app-produto-detail-sex-shop',
  templateUrl: './produto-detail-sex-shop.page.html',
  styleUrls: ['./produto-detail-sex-shop.page.scss'],
})
export class ProdutoDetailSexShopPage implements OnInit {

  item: ProdutoSexShopDTO;

  constructor(public navCtrl: NavController,
    public produtoSexShopService: ProdutoSexShopService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public cartService: CartService) { }

  ngOnInit() {
   let produto_id = ''
   this.activatedRoute.queryParams.subscribe( resp => produto_id = resp.produto_id)
   this.produtoSexShopService.findById(produto_id)
   .subscribe(response => {
     this.item = response;
   },
    error => {} );
  }

  addToCart(produto: ProdutoSexShopDTO) {
    this.cartService.addProdutoSex(produto);
    this.navCtrl.navigateRoot('/cart');
  }


 
}
