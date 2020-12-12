import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/services/storage.service';
import { ClienteDTO } from 'src/models/cliente.dto';
import { ClienteService } from 'src/services/domain/cliente.service';
import { API_CONFIG } from '../config/api.config';
import { DomSanitizer } from '@angular/platform-browser';
import { AuthInterceptor } from 'src/interceptors/auth-interceptor';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  cliente: ClienteDTO;
  picture: string;
  profileImage;
  auth: AuthInterceptor;
  

  constructor(public navCtrl: NavController,    
    public storage: StorageService,
    public clienteService: ClienteService,
    public sanitizer: DomSanitizer) {
      this.profileImage = 'assets/imgs/avatar-blank.png';
     }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    let localUser = this.storage.getLocalUser();    
    if (localUser && localUser.email && localUser.token) {       
      this.clienteService.findByEmail(localUser.email)      
        .subscribe(response => {                   
          this.cliente = response as ClienteDTO;          
          this.getImageIfExists();
        },
        error => {
          if (error.status == 403) {
            this.navCtrl.navigateRoot('/login');
          }
        });
    }
    else {
      this.navCtrl.navigateRoot('/login');
    }    
  }
    
  
  getImageIfExists() {
    this.clienteService.getImageFromBucket(this.cliente.id)
    .subscribe(response => {
      this.cliente.imageUrl = `${API_CONFIG.bucketBaseUrl}/cp${this.cliente.id}.jpg`;
      this.blobToDataURL(response).then(dataUrl => {
        let str : string = dataUrl as string;
        this.profileImage = this.sanitizer.bypassSecurityTrustUrl(str);
      });
    },
    error => {
      this.profileImage = 'assets/imgs/avatar-blank.png';
    });
  }

  blobToDataURL(blob) {
    return new Promise((fulfill, reject) => {
        let reader = new FileReader();
        reader.onerror = reject;
        reader.onload = (e) => fulfill(reader.result);
        reader.readAsDataURL(blob);
    })
  }
 
}
