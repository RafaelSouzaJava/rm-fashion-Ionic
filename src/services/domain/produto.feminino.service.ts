import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api.config';
import { Observable } from 'rxjs/Rx';
import { ProdutoFemininoDTO } from 'src/models/produto.feminino.dto';

@Injectable()
export class ProdutoFemininoService {


    constructor(public http: HttpClient) {

    }

    findById(produto_id : string) {
        return this.http.get<ProdutoFemininoDTO>(`${API_CONFIG.baseUrl}/produtosfeminino/${produto_id}`);
    }

    findByCategoriaFeminino(categoria_id : string) {
        return this.http.get(`${API_CONFIG.baseUrl}/produtosfeminino/?categoriasFeminino=${categoria_id}`);
    }

    getSmallImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prodFem${id}-small.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }

    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prodFem${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
    
}