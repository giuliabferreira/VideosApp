import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AFugaDasGalinhasPageRoutingModule } from './a-fuga-das-galinhas-routing.module';

import { AFugaDasGalinhasPage } from './a-fuga-das-galinhas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AFugaDasGalinhasPageRoutingModule
  ],
  declarations: [AFugaDasGalinhasPage]
})
export class AFugaDasGalinhasPageModule {}
