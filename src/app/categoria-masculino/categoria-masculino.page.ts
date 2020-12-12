import { Component, OnInit } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { CategoriaMasculinoDTO } from 'src/models/categoria.masculino.dto';
import { CategoriaMasculinoService } from 'src/services/domain/categoria.masculino.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-categoria-masculino',
  templateUrl: './categoria-masculino.page.html',
  styleUrls: ['./categoria-masculino.page.scss'],
})
export class CategoriaMasculinoPage implements OnInit {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: CategoriaMasculinoDTO[];
  
  constructor(public categoriaMasculinoService: CategoriaMasculinoService, private router: Router) { }

  ngOnInit() {
    this.categoriaMasculinoService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error =>{});
  }

  showProdutos(categoria_id : string) {
    this.router.navigate(['/produto-masculino'], {queryParams:{categoria_id: categoria_id}});
    
  }

}
