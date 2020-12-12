import { Component, OnInit } from '@angular/core';
import { API_CONFIG } from '../config/api.config';
import { VariadosService } from 'src/services/domain/variados.service';
import { VariadosDTO } from 'src/models/variados.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-variados',
  templateUrl: './variados.page.html',
  styleUrls: ['./variados.page.scss'],
})
export class VariadosPage implements OnInit {

  bucketUrl: string = API_CONFIG.bucketBaseUrl;

  items: VariadosDTO[];

  constructor(public variadosService: VariadosService, private router: Router) { }

  ngOnInit() {
    this.variadosService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error => {});
  }

  showProdutos(categoria_id : string) {
    this.router.navigate(['/produto-variado'], {queryParams:{categoria_id: categoria_id}});
    
  }

}
