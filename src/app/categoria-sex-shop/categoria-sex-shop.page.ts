import { Component, OnInit } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { CategoriaSexShopDTO } from 'src/models/categoria.sexshop.dto';
import { CategoriaSexShopService } from 'src/services/domain/categoria.sexshop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categoria-sex-shop',
  templateUrl: './categoria-sex-shop.page.html',
  styleUrls: ['./categoria-sex-shop.page.scss'],
})
export class CategoriaSexShopPage implements OnInit {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaSexShopDTO[];

  constructor(public categoriaSexShopService: CategoriaSexShopService, private router: Router) { }

  ngOnInit() {
    this.categoriaSexShopService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
  }

  showProdutos(categoria_id : string) {
    this.router.navigate(['/produto-sex-shop'], {queryParams:{categoria_id: categoria_id}});
    
  }

}
