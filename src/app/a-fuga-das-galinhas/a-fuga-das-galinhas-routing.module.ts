import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AFugaDasGalinhasPage } from './a-fuga-das-galinhas.page';

const routes: Routes = [
  {
    path: '',
    component: AFugaDasGalinhasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AFugaDasGalinhasPageRoutingModule {}
