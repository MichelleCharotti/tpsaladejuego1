import { Injectable } from '@angular/core';
import { Firestore,collection,addDoc,collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';
import { LogsSesion } from '../interfaces/logs-sesion';

@Injectable({
  providedIn: 'root'
})
export class DbUsuariosService {

  constructor(private firestore: Firestore) { }

  guardarUsuario(usuario: Usuario){
    const coleccion = collection(this.firestore, "usuarios");
    usuario.nombre = usuario.nombre.toLowerCase();
    return addDoc(coleccion, usuario);
  }

  obtenerUsuarios(): Observable<Usuario[]>{
    const coleccion = collection(this.firestore, "usuarios");
    return collectionData(coleccion, {idField: 'id'}) as Observable<Usuario[]>;
  }

  generarLogUsuario(usuario: Usuario){
    const coleccion = collection(this.firestore, "logsSesion");
    usuario.nombre = usuario.nombre.toLowerCase();
    let dateNow = new Date().toISOString()
    const log: LogsSesion = {nombre: usuario.nombre, tiempo: dateNow};
   
    return addDoc(coleccion, log);
  }

  actulizarPuntaje(tipo: TipoPuntaje, id: string, puntaje: number){
    const col = collection(this.firestore, "usuarios");
    const documento = doc(col, id);
    let datos: { [key in TipoPuntaje]: number } = {} as any;
    datos[tipo] = puntaje;
    updateDoc(documento, datos);
  }


}

export enum TipoPuntaje{
  ahorcado = "puntajeMaxAhorcado",
  buscamina = "puntajeMaxBuscamina",
  mayorMenor= "puntajeMaxMayorMenor",
  preguntados = "puntajeMaxPreguntados"
}
