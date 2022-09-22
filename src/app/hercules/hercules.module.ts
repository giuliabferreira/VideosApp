import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HerculesPageRoutingModule } from './hercules-routing.module';

import { HerculesPage } from './hercules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HerculesPageRoutingModule
  ],
  declarations: [HerculesPage]
})
export class HerculesPageModule {}
