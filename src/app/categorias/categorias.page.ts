import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(public menu: MenuController, public navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.swipeGesture(true);
    }

    categoriaFeminino(){
      this.navCtrl.navigateRoot('/categoria-feminino')
    }
}
