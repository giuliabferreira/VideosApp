import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarzanPageRoutingModule } from './tarzan-routing.module';

import { TarzanPage } from './tarzan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarzanPageRoutingModule
  ],
  declarations: [TarzanPage]
})
export class TarzanPageModule {}
