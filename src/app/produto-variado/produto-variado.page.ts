import { Component, OnInit } from '@angular/core';
import { ProdutoVariadoService } from 'src/services/domain/produto.variado.service';
import { ProdutoVariadoDTO } from 'src/models/produto.variado.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { API_CONFIG } from '../config/api.config';

@Component({
  selector: 'app-produto-variado',
  templateUrl: './produto-variado.page.html',
  styleUrls: ['./produto-variado.page.scss'],
})
export class ProdutoVariadoPage implements OnInit {

  items: ProdutoVariadoDTO[];

  constructor(private produtoVariadoService: ProdutoVariadoService,
     private activatedRoute: ActivatedRoute,
     private router: Router) { }

  ngOnInit() {
    let categoria_id = ''  
    this.activatedRoute.queryParams.subscribe( resp => categoria_id = resp.categoria_id)    
    this.produtoVariadoService.findByVariado(categoria_id)   
    .subscribe(response => {      
      this.items = response['content'];
      this.loadImageUrls();
    },
    error => {});
  }
  
  loadImageUrls() {
    for (var i=0; i<this.items.length; i++) {
      let item = this.items[i];
      this.produtoVariadoService.getSmallImageFromBucket(item.id)
      .subscribe(response => {
        item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prodVar${item.id}-small.jpg`;
      },
      error => {});
    }
  }

  showDetail(produto_id : string) {
    this.router.navigate(['/produto-detail-variado'], {queryParams: {produto_id: produto_id}});
  } 

}
