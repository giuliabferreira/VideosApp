import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PocahontasPage } from './pocahontas.page';

const routes: Routes = [
  {
    path: '',
    component: PocahontasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PocahontasPageRoutingModule {}
