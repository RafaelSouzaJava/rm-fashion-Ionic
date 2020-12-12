import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CidadeDTO } from 'src/models/cidade.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable()
export class CidadeService {

    constructor(public http: HttpClient) {
    }

    findAll(estado_id : string) : Observable<CidadeDTO[]>{
        return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseUrl}/estados/${estado_id}/cidades`);
    }
}