import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CategoriaSexShopDTO } from 'src/models/categoria.sexshop.dto';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable()
export class CategoriaSexShopService {


    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CategoriaSexShopDTO[]>{
        return this.http.get<CategoriaSexShopDTO[]>(`${API_CONFIG.baseUrl}/categoriassexshop`);
    }
}