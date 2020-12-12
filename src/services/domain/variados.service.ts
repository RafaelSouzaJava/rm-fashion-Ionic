import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { VariadosDTO } from 'src/models/variados.dto';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable()
export class VariadosService {


    constructor(public http: HttpClient){        
    }

    findAll() : Observable<VariadosDTO[]>{
        return this.http.get<VariadosDTO[]>(`${API_CONFIG.baseUrl}/variados`);
    }
}