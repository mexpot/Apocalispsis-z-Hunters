import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mapa } from '../interfaces/interface';



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

  // Método para obtener los datos de mapas
  getDatosMapa(): Observable<Mapa[]> {
    return this.firestore
      .collection('mapas')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((obj) => {
            const data = obj.payload.doc.data() as Mapa;
            return { ...data };
          })
        )
      );
  }
}

