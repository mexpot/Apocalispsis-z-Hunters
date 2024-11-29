import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  slides = [ 
    { title:'APOCALISPSIS Z HUNTERS ',
       img: 'assets/imgs/post3.gif', 
    
      description: 'El miedo es nuestro peor enemigo, no los zombis.', }, 
    ];

  constructor() {}

   ngOnInit() { }
  }