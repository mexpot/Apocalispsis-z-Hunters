import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { DetalleComponent } from './detalle/detalle.component';


@NgModule({
  declarations: [
   
    DetalleComponent
    
  ],
  exports:[
   
    DetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentesModule { 

}
