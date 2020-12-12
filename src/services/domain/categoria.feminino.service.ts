import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CategoriaFemininoDTO } from 'src/models/categoria.feminino.dto';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/config/api.config';

@Injectable()
export class CategoriaFemininoService {

    constructor(public http: HttpClient) {
    }

    findAll() : Observable<CategoriaFemininoDTO[]>{
        return this.http.get<CategoriaFemininoDTO[]>(`${API_CONFIG.baseUrl}/categoriasfeminino`);
    }
}