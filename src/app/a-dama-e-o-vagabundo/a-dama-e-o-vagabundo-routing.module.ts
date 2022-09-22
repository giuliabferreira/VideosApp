import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ADamaEOVagabundoPage } from './a-dama-e-o-vagabundo.page';

const routes: Routes = [
  {
    path: '',
    component: ADamaEOVagabundoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ADamaEOVagabundoPageRoutingModule {}
