import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public menu: MenuController, public navCtrl: NavController) {}

  ionViewWillEnter() {
    this.menu.swipeGesture(false);
    }

    login(){
      this.navCtrl.navigateRoot('/login');
    }
  
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true,
    pager:true
   };

   slidePer = {
    slidesPerView: 2,
    spaceBetween: 2
   };

   slidePerVi = {
    slidesPerView:3,
     spaceBetween:5
   }


  slides = [
    {
      img:'assets/imgs/catalogo1.jpg'
    },
    {
     img:'assets/imgs/catalogo2.jpg'
    },
    {
     img:'assets/imgs/catalogo3.jpg'
    },
    {
     img:'assets/imgs/catalogo4.jpg'
    }
  ]


}
