import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsComponent } from './ionic/tabs/tabs.component';
import { IonIcon } from '@ionic/angular';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
{
    path: 'videogame',
    loadChildren: () => import('./pages/videogame/videogame.module').then( m => m.VideogamePageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'mecanicas',
    loadChildren: () => import('./pages/mecanicas/mecanicas.module').then( m => m.MecanicasPageModule)
  },

  {
    path: 'items',
    loadChildren: () => import('./pages/items/items.module').then( m => m.ItemsPageModule)
  },

  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./componentes/imagenes/imagenes.component').then( m => m.ImagenesComponent)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./ionic/tabs/tabs.component').then( m => m.TabsComponent)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
