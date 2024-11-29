import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';


import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private collectionName = 'personajes'; // Nombre de la colección o documento

  constructor(private firestore: AngularFirestore) {}

  // Método para obtener los datos del documento único
  getDatos() {
    return this.firestore.collection('personajes').snapshotChanges();
  }

  // Método para obtener detalles de un personaje específico por ID
  getDetalle(id: string){
    return this.firestore.collection('personajes').doc(id).valueChanges();
  }
}