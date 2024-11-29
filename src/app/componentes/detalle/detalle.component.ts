import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Detalle } from 'src/app/interfaces/interface';
import { InfGeneral } from 'src/app/interfaces/interface';
import { PersonajesService } from 'src/app/services/personajes.service';

import { Personaje } from '../../interfaces/interface';






@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent  implements OnInit {
  @Input() id:any;
  //Declaramos los objetos que almacenarán el detalle recuperado
  
  detalleGeneral={} as InfGeneral;

  detallePersonaje={} as Personaje;



  constructor(//Creamos un objeto para manipular el detalle
    private detalle:PersonajesService ,
    private modalCtrl:ModalController) {
   
   }
   regresar(){
    this.modalCtrl.dismiss();


   }

   ngOnInit() {
    this.detalle.getDetalle(this.id)
      .subscribe((respuesta)=>{
      console.log('Detalle Personaje', respuesta)
      this.detallePersonaje=<Personaje>respuesta;
      });
  }

}

