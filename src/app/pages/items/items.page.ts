import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  items = [ { name: 'Arma', 
    description: 'Una arma claibrada y poderosa facil de disparar  .', 
    image: 'assets/imgs/player.png' },
    ]

  constructor() { }

  ngOnInit() {
  }

}
