import { Component, OnInit } from '@angular/core';
import { CartItemFeminino } from 'src/models/cart-item.feminino';
import { CartItemMasculino } from 'src/models/cart-item.masculino';
import { CartItemSexShop } from 'src/models/cart-item.sexshop';
import { CartItemVariado } from 'src/models/cart-item.variado';
import { ProdutoMasculinoService } from 'src/services/domain/produto.masculino.service';
import { API_CONFIG } from '../config/api.config';
import { ProdutoFemininoService } from 'src/services/domain/produto.feminino.service';
import { ProdutoSexShopService } from 'src/services/domain/produto.sexshop.service';
import { ProdutoVariadoService } from 'src/services/domain/produto.variado.service';
import { CartService } from 'src/services/domain/cart.service';
import { StorageService } from 'src/services/storage.service';
import { ProdutoFemininoDTO } from 'src/models/produto.feminino.dto';
import { ProdutoMasculinoDTO } from 'src/models/produto.masculino.dto';
import { ProdutoSexShopDTO } from 'src/models/produto.sexshop.dto';
import { ProdutoVariadoDTO } from 'src/models/produto.variado.dto';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  itemsFem: CartItemFeminino[];
  itemsMasc: CartItemMasculino[];
  itemSex: CartItemSexShop[];
  itemVar: CartItemVariado[];

  constructor(public cartService: CartService, public produtoMasculinoService: ProdutoMasculinoService,
    public produtoFemininoService: ProdutoFemininoService, public pudutoSexShopService: ProdutoSexShopService,
    public produtoVariadoService: ProdutoVariadoService, public storage: StorageService, public navCtrl: NavController ) { }

  ngOnInit() {
    const cart = this.cartService.getCart(); console.log("não é no carrinho page" + cart);
    this.itemsFem = cart.itemsFem; 
    this.itemsMasc = cart.itemsMasc;
    this.itemVar = cart.itemVar;
    this.itemSex = cart.itemsSex;
    
    this.loadImageUrlsFem();
    this. loadImageUrlsMasc();
    this.loadImageUrlsVar();
    this.loadImageUrlsSex();
    console.log("Pegando o produto" ,this.itemsFem);
    console.log("Pegando o produto" ,this.itemVar);
 
  }

  loadImageUrlsFem() {
    for (var i=0; i<this.itemsFem.length; i++) {
      let item = this.itemsFem[i];
      this.produtoFemininoService.getSmallImageFromBucket(item.produto.id)
      .subscribe(response => {
        item.produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/prodFem${item.produto.id}-small.jpg`;
      },
      error => {});
    }
    
  }

  loadImageUrlsMasc() {
    for (var i=0; i<this.itemsMasc.length; i++) {
      let item = this.itemsMasc[i];
      this.produtoMasculinoService.getSmallImageFromBucket(item.produto.id)
      .subscribe(response => {
        item.produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/prodMasc${item.produto.id}-small.jpg`;
      },
      error => {});
    }
  }


  loadImageUrlsSex() {
    for (var i=0; i<this.itemSex.length; i++) {
      let itemSex = this.itemSex[i];
      this.pudutoSexShopService.getSmallImageFromBucket(itemSex.produto.id)
      .subscribe(response => {
        itemSex.produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/prodSex${itemSex.produto.id}-small.jpg`;
      },
      error => {});
    }
  }

  loadImageUrlsVar() {
    for (var i=0; i<this.itemVar.length; i++) {
      let itemVar = this.itemVar[i];
      this.produtoVariadoService.getSmallImageFromBucket(itemVar.produto.id)
      .subscribe(response => {
        itemVar.produto.imageUrl = `${API_CONFIG.bucketBaseUrl}/prodVar${itemVar.produto.id}-small.jpg`;
      },
      error => {});
    }
  }

  removeItemFem(produto : ProdutoFemininoDTO) {
    this.itemsFem = this.cartService.removeProdutoFem(produto).itemsFem;
  }

  removeItemMasc(produto : ProdutoMasculinoDTO) {
    this.itemsMasc = this.cartService.removeProdutoMasc(produto).itemsMasc;
  }

  removeItemSex(produto : ProdutoSexShopDTO) {
    this.itemSex = this.cartService.removeProdutoSex(produto).itemsSex;
  }

  removeItemVar(produto : ProdutoVariadoDTO) {
    this.itemVar = this.cartService.removeProdutoVar(produto).itemVar;
  }

  increaseQuantityFem(produto : ProdutoFemininoDTO) {
    this.itemsFem = this.cartService.increaseQuantityFem(produto).itemsFem;
  }

  increaseQuantityMasc(produto : ProdutoMasculinoDTO) {
    this.itemsMasc = this.cartService.increaseQuantityMac(produto).itemsMasc;
  }

  increaseQuantitySex(produto : ProdutoSexShopDTO) {
    this.itemSex = this.cartService.increaseQuantitySex(produto).itemsSex;
  }

  increaseQuantityVar(produto : ProdutoVariadoDTO) {
    this.itemVar = this.cartService.increaseQuantityVar(produto).itemVar;
  }

  decreaseQuantityFem(produto : ProdutoFemininoDTO) {
    this.itemsFem = this.cartService.decreaseQuantityFem(produto).itemsFem;
  }

  decreaseQuantityMasc(produto : ProdutoMasculinoDTO) {
    this.itemsMasc = this.cartService.decreaseQuantityMac(produto).itemsMasc;
  }

  decreaseQuantitySex(produto : ProdutoSexShopDTO) {
    this.itemSex = this.cartService.decreaseQuantitySex(produto).itemsSex;
  }

  decreaseQuantityVar(produto : ProdutoVariadoDTO) {
    this.itemVar = this.cartService.decreaseQuantityVar(produto).itemVar;
  }

  total() : number {
    return this.cartService.total();
  }

  goOn(){
    this.navCtrl.navigateRoot('/categorias');
  }

  checkout(){
    this.navCtrl.navigateRoot('/pick-address');
  }

}
