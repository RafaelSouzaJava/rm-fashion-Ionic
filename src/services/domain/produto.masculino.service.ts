import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api.config';
import { Observable } from 'rxjs/Rx';
import { ProdutoMasculinoDTO } from 'src/models/produto.masculino.dto';

@Injectable()
export class ProdutoMasculinoService {


    constructor(public http: HttpClient) {

    }

    findById(produto_id : string) {
        return this.http.get<ProdutoMasculinoDTO>(`${API_CONFIG.baseUrl}/produtosmasculino/${produto_id}`);
    }

    findByCategoriaMasculino(categoria_id : string) {
        return this.http.get(`${API_CONFIG.baseUrl}/produtosmasculino/?categoriasMasculino=${categoria_id}`);
    }

    getSmallImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prodMasc${id}-small.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }

    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prodMasc${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}