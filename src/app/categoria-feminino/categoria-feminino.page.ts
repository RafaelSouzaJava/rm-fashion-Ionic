import { Component, OnInit } from '@angular/core';

import { API_CONFIG } from '../config/api.config';
import { CategoriaFemininoDTO } from 'src/models/categoria.feminino.dto';
import { CategoriaFemininoService } from 'src/services/domain/categoria.feminino.service';
import { NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-categoria-feminino',
  templateUrl: './categoria-feminino.page.html',
  styleUrls: ['./categoria-feminino.page.scss'],
})
export class CategoriaFemininoPage implements OnInit {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaFemininoDTO[];
  
  constructor(public categoriaFemininoService: CategoriaFemininoService,
    public navCtrl: NavController,     
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.categoriaFemininoService.findAll()
    .subscribe(response => {
      this.items= response;
    },
    error => {});

  }

  showProdutos(categoria_id : string) {
    this.router.navigate(['/produto-feminino'], {queryParams:{categoria_id: categoria_id}});
    
  }


}
