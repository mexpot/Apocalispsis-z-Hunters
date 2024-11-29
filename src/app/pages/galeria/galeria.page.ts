import { Component, OnInit, } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImagenesComponent } from 'src/app/componentes/imagenes/imagenes.component';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  images = [
     { src: 'assets/imgs/it.png', alt: 'Image 1' }, 
    { src: 'assets/imgs/N.png', alt: 'Image 2' }, 
    { src: 'assets/imgs/mar.png', alt: 'Image 3' }, 
    { src: 'assets/imgs/it.png', alt: 'Image 1' }, 
    { src: 'assets/imgs/N.png', alt: 'Image 2' }, 
    { src: 'assets/imgs/mar.png', alt: 'Image 3' },
    { src: 'assets/imgs/it.png', alt: 'Image 1' }, 
    { src: 'assets/imgs/N.png', alt: 'Image 2' }, 
    { src: 'assets/imgs/mar.png', alt: 'Image 3' },

    ]
   constructor(private modalController: ModalController) {} 

   async openImageModal(images:any) {
   const modal = await this.modalController.create({ component: ImagenesComponent, componentProps: 
     {images} }); 
    return await modal.present(); } 
  
  
  ngOnInit() {
  }
}

