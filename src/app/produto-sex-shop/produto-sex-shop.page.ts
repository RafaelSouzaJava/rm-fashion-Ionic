import { Component, OnInit } from '@angular/core';
import { ProdutoSexShopService } from 'src/services/domain/produto.sexshop.service';
import { ProdutoSexShopDTO } from 'src/models/produto.sexshop.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Component({
  selector: 'app-produto-sex-shop',
  templateUrl: './produto-sex-shop.page.html',
  styleUrls: ['./produto-sex-shop.page.scss'],
})
export class ProdutoSexShopPage implements OnInit {

  items: ProdutoSexShopDTO[];

  constructor(private produtoSexShopService: ProdutoSexShopService, private activatedRoute: ActivatedRoute,
    private router: Router ) { }

  ngOnInit() {
    let categoria_id = ''  
    this.activatedRoute.queryParams.subscribe( resp => categoria_id = resp.categoria_id)    
    this.produtoSexShopService.findByCategoriaSexShop(categoria_id)   
    .subscribe(response => {      
      this.items = response['content'];
      this.loadImageUrls();
    },
    error => {});
  }  

  loadImageUrls() {
    for (var i=0; i<this.items.length; i++) {
      let item = this.items[i];
      this.produtoSexShopService.getSmallImageFromBucket(item.id)
      .subscribe(response => {
        item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prodSex${item.id}-small.jpg`;
      },
      error => {});
    }
  }

  showDetail(produto_id : string) {
    this.router.navigate(['/produto-detail-sex-shop'], {queryParams: {produto_id: produto_id}});
  } 
}
