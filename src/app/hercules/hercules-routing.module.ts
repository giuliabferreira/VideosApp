import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HerculesPage } from './hercules.page';

const routes: Routes = [
  {
    path: '',
    component: HerculesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HerculesPageRoutingModule {}
