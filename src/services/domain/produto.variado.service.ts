import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api.config';
import { ProdutoVariadoDTO } from 'src/models/produto.variado.dto';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProdutoVariadoService {


    constructor(public http: HttpClient) {

    }

    findById(produto_id : string) {
        return this.http.get<ProdutoVariadoDTO>(`${API_CONFIG.baseUrl}/produtosvariado/${produto_id}`);
    }

    findByVariado(categoria_id : string) {
        return this.http.get(`${API_CONFIG.baseUrl}/produtosvariado/?variado=${categoria_id}`);
    }

    getSmallImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prodVar${id}-small.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }

    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prodVar${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}