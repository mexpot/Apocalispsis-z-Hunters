import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PersonajesService } from 'src/app/services/personajes.service';
import { Personaje } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id: any;  // El id es pasado desde el componente padre

  detallePersonaje= {} as Personaje;  // Inicializar el objeto de tipo Personaje

  constructor(
    private detalleService: PersonajesService,
    private modalCtrl: ModalController
  ) {}

  // Método para cerrar el modal
  regresar() {
    this.modalCtrl.dismiss();
  }

  // Al cargar el componente, se obtiene el detalle del personaje
  ngOnInit() {
    if (this.id) {  // Verificar que el ID no sea nulo o indefinido
      this.detalleService.getDetalle(this.id).subscribe(
        (respuesta) => {
          console.log('Detalle Personaje:', respuesta);
          this.detallePersonaje = <Personaje>respuesta;  // Asignar los datos al objeto
        },
        (error) => {
          console.error('Error al obtener el detalle:', error);  // Manejo de errores
        }
      );
    } else {
      console.error('No se proporcionó un ID válido para el personaje');
    }
  }
}
