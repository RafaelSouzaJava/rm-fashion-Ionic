import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EstadoDTO } from 'src/models/estado.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable()
export class EstadoService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<EstadoDTO[]>{
        return this.http.get<EstadoDTO[]>(`${API_CONFIG.baseUrl}/estados`);
    }
}