import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from 'src/app/componentes/detalle/detalle.component';
import { Personaje, Personajes, Mapa } from '../../interfaces/interface';

@Component({
  selector: 'app-videogame',
  templateUrl: './videogame.page.html',
  styleUrls: ['./videogame.page.scss'],
})
export class VideogamePage implements OnInit {
  // Propiedades del Slide
  opcionesSlide = {
    slidesPerView: 1.1,
    freeMode: true,
  };

  personajesRecientes: Personajes[] = [];
  mapasRecientes: Mapa[] = [];

  constructor(
    private servicioPersonajes: PersonajesService, // Servicio único para personajes y mapas
    private modalCtrl: ModalController // Modal controller para detalles
  ) {}

  // Método para ver el detalle de un personaje

  ngOnInit() {
    // Obtener datos de personajes
    this.servicioPersonajes.getDatos().subscribe((resp) => {
      resp.forEach((obj) => {
        this.personajesRecientes.push({
          id: obj.payload.doc.id,
          data: <Personaje>obj.payload.doc.data(),
        });
      });
      console.log('Personajes:', this.personajesRecientes);
    });

    // Obtener datos de mapas
     // Obtener datos de mapas
     this.servicioPersonajes.getDatosMapa().subscribe((mapas) => {
      this.mapasRecientes = mapas;
      console.log('Mapas:', this.mapasRecientes);
    });
  }
}
