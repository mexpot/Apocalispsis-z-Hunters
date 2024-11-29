import { Component, OnInit,Input } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';


import { Personaje, Personajes} from '../../interfaces/interface';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.page.html',
  styleUrls: ['./videogame.page.scss'],

})
export class VideogamePage implements OnInit {


  //Propiedades del Slide
  opcionesSlide = {
    //se mostrará 1 slide y una parte del otro
    slidesPerView: 1.1,
    //Permite una navegación libre (más rápida)
    freeMode: true
  }

  personajesRecientes: Personajes[]=[];


  constructor(
    private servicioPersonajes: PersonajesService, // Servicio para obtener los datos
    private modalCtrl: ModalController // Modal controller para detalles
  ) {}

  // Método para ver el detalle de un personaje
  async verDetalle(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: { id },
    });
    modal.present();
  }
    ngOnInit() {
    this.servicioPersonajes.getDatos()
    .subscribe((resp)=>{
    console.log(resp[0].payload.doc)
      resp.forEach (obj=> {
      this.personajesRecientes.push({
      id: obj.payload.doc.id,
      data: <Personaje>obj.payload.doc.data(),
      });
    });
  });
  }

}
