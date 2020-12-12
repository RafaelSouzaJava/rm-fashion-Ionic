import { Component, OnInit, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProdutoFemininoDTO } from 'src/models/produto.feminino.dto';
import { ProdutoFemininoService } from 'src/services/domain/produto.feminino.service';
import { ActivatedRoute, Router } from '@angular/router';
import { API_CONFIG } from '../config/api.config';

@Component({
  selector: 'app-produto-feminino',
  templateUrl: './produto-feminino.page.html',
  styleUrls: ['./produto-feminino.page.scss'],
})
export class ProdutoFemininoPage implements OnInit {

  items: ProdutoFemininoDTO[];

  constructor(public navCtrl: NavController,
    private activatedRoute: ActivatedRoute,       
    public produtoFemininoService: ProdutoFemininoService,
    private router: Router) { }

  ngOnInit() {
    let categoria_id = ''  
    this.activatedRoute.queryParams.subscribe( resp => categoria_id = resp.categoria_id)    
    this.produtoFemininoService.findByCategoriaFeminino(categoria_id)   
    .subscribe(response => {      
      this.items = response['content'];
      this.loadImageUrls();
    },
    error => {});
 }
 loadImageUrls() {
  for (var i=0; i<this.items.length; i++) {
    let item = this.items[i];
    this.produtoFemininoService.getSmallImageFromBucket(item.id)
    .subscribe(response => {
      item.imageUrl = `${API_CONFIG.bucketBaseUrl}/prodFem${item.id}-small.jpg`;
    },
    error => {});
  }
}

showDetail(produto_id : string) {
  this.router.navigate(['/produto-detail-feminino'], {queryParams: {produto_id: produto_id}});
} 


 ionViewWillEnter() {
   // usar no lugar do ngOnInit
 }
}
