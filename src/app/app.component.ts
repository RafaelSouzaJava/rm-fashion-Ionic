import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Categorias',
      url: '/categorias',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'contact'
    },  
    
    {
      title: 'Carrinho',
      url: '/cart',
      icon: 'cart'
    },   
    
  
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthService,
    private nav: NavController,
    private menu: MenuController
  ) {
    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();     
    });
  }

  logout(){    
    this.auth.logaut()
    this.nav.navigateRoot('/login');
    this.menu.enable(false);    
  }
 

}
