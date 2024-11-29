import { Component, OnInit,Input} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss'],
})
export class ImagenesComponent  implements OnInit {

  @Input() image: any; 

  constructor(private modalController: ModalController) {} 
  dismiss() { this.modalController.dismiss(); } 

  ngOnInit() {




  }


}