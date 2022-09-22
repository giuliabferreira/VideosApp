import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PocahontasPageRoutingModule } from './pocahontas-routing.module';

import { PocahontasPage } from './pocahontas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PocahontasPageRoutingModule
  ],
  declarations: [PocahontasPage]
})
export class PocahontasPageModule {}
