import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy, NavParams } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ErrorInterceptorProvider } from 'src/interceptors/error-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { CategoriaFemininoService } from 'src/services/domain/categoria.feminino.service';
import { CategoriaSexShopService } from 'src/services/domain/categoria.sexshop.service';
import { CategoriaMasculinoService } from 'src/services/domain/categoria.masculino.service';
import { VariadosService } from 'src/services/domain/variados.service';
import { AuthService } from 'src/services/auth.service';
import { StorageService } from 'src/services/storage.service';
import { ClienteService } from 'src/services/domain/cliente.service';
import { AuthInterceptorProvider } from 'src/interceptors/auth-interceptor';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProdutoFemininoService } from 'src/services/domain/produto.feminino.service';
import { ProdutoMasculinoService } from 'src/services/domain/produto.masculino.service';
import { ProdutoSexShopService } from 'src/services/domain/produto.sexshop.service';
import { ProdutoVariadoService } from 'src/services/domain/produto.variado.service';
import { CartService } from 'src/services/domain/cart.service';
import { PaymentPage } from './payment/payment.page';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule,
    CommonModule
        
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },  
    AuthInterceptorProvider,
    ErrorInterceptorProvider,   
    CategoriaFemininoService,
    CategoriaMasculinoService,
    CategoriaSexShopService,
    VariadosService,
    AuthService,
    ErrorInterceptorProvider,    
    StorageService,
    ClienteService,
    ProdutoFemininoService,
    ProdutoMasculinoService,
    ProdutoSexShopService,
    ProdutoVariadoService,
    CartService,
    PaymentPage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
