import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { ClienteDTO } from 'src/models/cliente.dto';
import { API_CONFIG } from 'src/app/config/api.config';
import { StorageService } from '../storage.service';
import { AuthService } from '../auth.service';

@Injectable()
export class ClienteService {
    
    constructor(public http: HttpClient, public storage: StorageService,public auth: AuthService){        
    }

   
    findById(id: string) {
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/${id}`);
    }
    
    findByEmail(email: string) {                
        return this.http.get(`${API_CONFIG.baseUrl}/clientes/email?value=${email}`);
        
    }
    
    getImageFromBucket(id : string) : Observable<any> {
        let url = `${API_CONFIG.bucketBaseUrl}/cp${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }

    insert(obj : ClienteDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/clientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
    

}