import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CategoriaMasculinoDTO } from 'src/models/categoria.masculino.dto';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable()
export class CategoriaMasculinoService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CategoriaMasculinoDTO[]>{
        return this.http.get<CategoriaMasculinoDTO[]>(`${API_CONFIG.baseUrl}/categoriasmasculino`);
    }

}