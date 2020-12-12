import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'categorias',
    loadChildren: () => import('./categorias/categorias.module').then( m => m.CategoriasPageModule)
  },
  {
    path: 'categoria-feminino',
    loadChildren: () => import('./categoria-feminino/categoria-feminino.module').then( m => m.CategoriaFemininoPageModule)
  },
  {
    path: 'categoria-masculino',
    loadChildren: () => import('./categoria-masculino/categoria-masculino.module').then( m => m.CategoriaMasculinoPageModule)
  },
  {
    path: 'categoria-sex-shop',
    loadChildren: () => import('./categoria-sex-shop/categoria-sex-shop.module').then( m => m.CategoriaSexShopPageModule)
  },
  {
    path: 'variados',
    loadChildren: () => import('./variados/variados.module').then( m => m.VariadosPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'produto-feminino',
    loadChildren: () => import('./produto-feminino/produto-feminino.module').then( m => m.ProdutoFemininoPageModule)
  },
  {
    path: 'produto-masculino',
    loadChildren: () => import('./produto-masculino/produto-masculino.module').then( m => m.ProdutoMasculinoPageModule)
  },
  {
    path: 'produto-sex-shop',
    loadChildren: () => import('./produto-sex-shop/produto-sex-shop.module').then( m => m.ProdutoSexShopPageModule)
  },
  {
    path: 'produto-variado',
    loadChildren: () => import('./produto-variado/produto-variado.module').then( m => m.ProdutoVariadoPageModule)
  },
  {
    path: 'produto-detail-feminino',
    loadChildren: () => import('./produto-detail-feminino/produto-detail-feminino.module').then( m => m.ProdutoDetailFemininoPageModule)
  },
  {
    path: 'produto-detail-masculino',
    loadChildren: () => import('./produto-detail-masculino/produto-detail-masculino.module').then( m => m.ProdutoDetailMasculinoPageModule)
  },
  {
    path: 'produto-detail-sex-shop',
    loadChildren: () => import('./produto-detail-sex-shop/produto-detail-sex-shop.module').then( m => m.ProdutoDetailSexShopPageModule)
  },
  {
    path: 'produto-detail-variado',
    loadChildren: () => import('./produto-detail-variado/produto-detail-variado.module').then( m => m.ProdutoDetailVariadoPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'pick-address',
    loadChildren: () => import('./pick-address/pick-address.module').then( m => m.PickAddressPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
