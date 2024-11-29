import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideogamePage } from './videogame.page';

const routes: Routes = [
  {
    path: '',
    component: VideogamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideogamePageRoutingModule {}
