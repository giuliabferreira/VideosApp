import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'a-fuga-das-galinhas',
    loadChildren: () => import('./a-fuga-das-galinhas/a-fuga-das-galinhas.module').then( m => m.AFugaDasGalinhasPageModule)
  },  {
    path: 'mulan',
    loadChildren: () => import('./mulan/mulan.module').then( m => m.MulanPageModule)
  },
  {
    path: 'pocahontas',
    loadChildren: () => import('./pocahontas/pocahontas.module').then( m => m.PocahontasPageModule)
  },
  {
    path: 'tarzan',
    loadChildren: () => import('./tarzan/tarzan.module').then( m => m.TarzanPageModule)
  },
  {
    path: 'hercules',
    loadChildren: () => import('./hercules/hercules.module').then( m => m.HerculesPageModule)
  },
  {
    path: 'a-dama-e-o-vagabundo',
    loadChildren: () => import('./a-dama-e-o-vagabundo/a-dama-e-o-vagabundo.module').then( m => m.ADamaEOVagabundoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
