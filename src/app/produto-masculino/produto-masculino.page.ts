import { Component, OnInit } from '@angular/core';
import { ProdutoMasculinoService } from 'src/services/domain/produto.masculino.service';
import { ProdutoMasculinoDTO } from 'src/models/produto.masculino.dto';
import { ActivatedRoute, Router } from '@angular/router';
import { API_CONFIG } from '../config/api.config';

@Component({
  selector: 'app-produto-masculino',
  templateUrl: './produto-masculino.page.html',
  styleUrls: ['./produto-masculino.page.scss'],
})
export class ProdutoMasculinoPage implements OnInit {

  items: ProdutoMasculinoDTO[];

  constructor(public produtoMasculinoService: ProdutoMasculinoService, 
    private activatedRoute: ActivatedRoute,
    private router: Router  ) { }

  ngOnInit() {
    let categoria_id = ''  
    this.activatedRoute.queryParams.subscribe( resp => categoria_id = resp.categoria_id)    
    this.produtoMasculinoService.findByCategoriaMasculino(categoria_id)   
    .subscribe(response => {      
      this.items = response['content'];
      this.loadImageUrls();
    },
    error => {});
  }

  loadImageUrls() {
    for (var i=0; i<this.items.length; i++) {
      let item = this.items[i];
      this.produtoMasculinoService.getSmallImageFromBucket(item.id)
      .subscribe(response => {
        item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prodMasc${item.id}-small.jpg`;
      },
      error => {});
    }
  }

  showDetail(produto_id : string) {
    this.router.navigate(['/produto-detail-masculino'], {queryParams: {produto_id: produto_id}});
  } 

}
