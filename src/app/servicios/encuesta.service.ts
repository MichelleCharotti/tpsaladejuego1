import { Injectable } from '@angular/core';
import { addDoc, collection, doc, Firestore, getDoc, getFirestore, setDoc } from '@angular/fire/firestore';
import { initializeApp } from '@angular/fire/app';
import { environment } from '../../enviroment/enviroment';


@Injectable({
  providedIn: 'root'
})
export class EncuestaService {
  app = initializeApp(environment);
  db = getFirestore(this.app);

  constructor() { }


async agregarEncuesta(encuesta:any){
  addDoc(collection(this.db,"encuesta"), {encuesta});
  console.log(encuesta);
}


}
