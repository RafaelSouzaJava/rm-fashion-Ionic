import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/services/auth.service';
import { CredenciaisDTO } from 'src/models/credenciais.dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  }


  constructor(public menu: MenuController, public navCtrl: NavController, public auth : AuthService
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.swipeGesture(false);
    }

  ionViewDidEnter(){
    this.auth.refreshToken()
   .subscribe(response => {
     this.auth.successfulLogin(response.headers.get('Authorization'));
     this.navCtrl.navigateRoot('/categorias');
   },
   error => {});
  }

  login(){
   this.auth.authenticate(this.creds)
   .subscribe(response => {
     this.auth.successfulLogin(response.headers.get('Authorization'));
     this.navCtrl.navigateRoot('/categorias');
   },
   error => {});
    
  }

  

}
