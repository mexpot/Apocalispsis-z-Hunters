import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideogamePageRoutingModule } from './videogame-routing.module';

import { VideogamePage } from './videogame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideogamePageRoutingModule
  ],
  declarations: [VideogamePage]
})
export class VideogamePageModule {}
