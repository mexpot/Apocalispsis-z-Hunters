import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ImagenesComponent } from './componentes/imagenes/imagenes.component';
import { GaleriaPageModule } from './pages/galeria/galeria.module';
import { provideHttpClient } from '@angular/common/http';

import { firebaseConfig } from '../environments/firebaseconfig'; 
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  declarations: [AppComponent,ImagenesComponent],
  imports: [BrowserModule, IonicModule.forRoot(),  AppRoutingModule,
    GaleriaPageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, AngularFirestoreModule, ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy ,
  },provideHttpClient()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  

})
export class AppModule {}
