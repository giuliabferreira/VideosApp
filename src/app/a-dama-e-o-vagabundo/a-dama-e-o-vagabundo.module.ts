import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ADamaEOVagabundoPageRoutingModule } from './a-dama-e-o-vagabundo-routing.module';

import { ADamaEOVagabundoPage } from './a-dama-e-o-vagabundo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ADamaEOVagabundoPageRoutingModule
  ],
  declarations: [ADamaEOVagabundoPage]
})
export class ADamaEOVagabundoPageModule {}
