import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from 'src/app/config/api.config';
import { Observable } from 'rxjs/Rx';
import { ProdutoSexShopDTO } from 'src/models/produto.sexshop.dto';

@Injectable()
export class ProdutoSexShopService {


    constructor(public http: HttpClient) {

    }

    findById(produto_id : string) {
        return this.http.get<ProdutoSexShopDTO>(`${API_CONFIG.baseUrl}/produtossexshop/${produto_id}`);
    }

    findByCategoriaSexShop(categoria_id : string) {
        return this.http.get(`${API_CONFIG.baseUrl}/produtossexshop/?categoriaSexShop=${categoria_id}`);
    }

    getSmallImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prodSex${id}-small.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }

    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/prodSex${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}