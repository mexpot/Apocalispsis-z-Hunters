import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MecanicasPageRoutingModule } from './mecanicas-routing.module';

import { MecanicasPage } from './mecanicas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MecanicasPageRoutingModule
  ],
  declarations: [MecanicasPage]
})
export class MecanicasPageModule {}
