import { Component } from '@angular/core';
import { UsuarioService } from '../../servicios/usuario.service';
import { DbUsuariosService, TipoPuntaje } from '../../servicios/db-usuarios.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-ahorcado',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.scss'
})
export class AhorcadoComponent {
  palabra: Array<string> = ['E','l',' ','P','s','y',' ','K','o','n','g','r','o','o']; 
  errores: number = 0; 
  letrasSeleccionadas: string[] = []; 
  abecedario: string[] = "abcdefghijklmnñopqrstuvwxyz".split(""); 
  imagenAhorcado: string[] = ["../../../assets/ahorcado/hangman-0.png", "../../../assets/ahorcado/hangman-1.png", "../../../assets/ahorcado/hangman-2.png", "../../../assets/ahorcado/hangman-3.png", "../../../assets/ahorcado/hangman-4.png", "../../../assets/ahorcado/hangman-5.png", "../../../assets/ahorcado/hangman-6.png"];
  mostrarMensajeFinal: boolean = false; 
  generandoPalabra: boolean = true;
  mensajeFinal: string = "";
  listOfWords: string[] = [
    'GATO',
    'PERRO',
    'LEON',
    'ELEFANTE',
    'SERPIENTE',
    'COCODRILO',
    'POMELO',
    'MANZANA',
    'LAPICERA',
    'CUADERNO'
  ];
  word: string = '';
  

  constructor( private user: UsuarioService, private db: DbUsuariosService) 
  {
    this.nuevoJuego();
  }

  async nuevoJuego(){
     this.generandoPalabra = true;
     this.palabra= ['E','l',' ','P','s','y',' ','K','o','n','g','r','o','o']; 
     this.errores = 0;
     this.mostrarMensajeFinal = false;
    this.ObtenerPalabra();

  }
 
  formatearPalabra(palabra: string){
    return palabra.toLowerCase().replace(" ","").replace("  ","").replace("   ","");
  }

  private ObtenerPalabra(){
   
    this.word = this.listOfWords[ Math.round(Math.random() * (this.listOfWords.length - 1))];
    if(this.word)
    {
      this.palabra = this.formatearPalabra(this.word).split("");
      this.letrasSeleccionadas = [];
      this.letrasSeleccionadas.push(this.palabra[0], this.palabra[this.palabra.length-1]);
      this.generandoPalabra = false;
    }
  }

  intentarLetra(letra: string): void {
    this.agregarLetra(letra);
    this.verificarLetra(letra);

    if (this.calcularVictoria()) {
      this.ganoElJuego();
    } 
    else if (this.calcularDerrota()) {
      this.Perder(); 
    }
  }

  private ganoElJuego(){
    const puntaje = Math.max(1, this.palabra.length - 5);
    this.mostrarMensajeFinal = true;
    this.mensajeFinal = "GANASTE"; 
    if(this.user.datos?.id){
      this.mensajeFinal = this.mensajeFinal +" "+ puntaje + " PUNTOS!!";
      this.user.datos.puntajeMaxAhorcado = puntaje + this.user.datos.puntajeMaxAhorcado;
      this.db.actulizarPuntaje(TipoPuntaje.ahorcado, this.user.datos.id, this.user.datos.puntajeMaxAhorcado);
    }
  }

  private verificarLetra(letra: string): void {
    let correcta = false;
    if(letra == "a"){
      correcta = this.palabra.some(char => char === 'a' || char === 'á');
    }
    else if(letra == "e"){
      correcta = this.palabra.some(char => char === 'e' || char === 'é');
    }
    else if(letra == "i"){
      correcta = this.palabra.some(char => char === 'i' || char === 'í');
    }
    else if(letra == "o"){
      correcta = this.palabra.some(char => char === 'o' || char === 'ó');
    }
    else if(letra == "u"){
      correcta = this.palabra.some(char => char === 'u' || char === 'ú' || char === "ü");
    }
    else{
      correcta = this.palabra.includes(letra);
    }

    if(!correcta){
      this.errores++;
    };
  }

  private agregarLetra(letra: string){
    this.letrasSeleccionadas.push(letra);
    if(letra == "a"){
      this.letrasSeleccionadas.push("á");
    }
    if(letra == "e"){
      this.letrasSeleccionadas.push("é");
    }
    if(letra == "i"){
      this.letrasSeleccionadas.push("í");
    }
    if(letra == "o"){
      this.letrasSeleccionadas.push("ó");
    }
    if(letra == "u"){
      this.letrasSeleccionadas.push("ú","ü");
    }
  }

  calcularVictoria(): boolean {
    return this.palabra.every(letras => this.letrasSeleccionadas.includes(letras));
  }

  calcularDerrota(): boolean {
    return this.errores == 6;
  }

  private Perder(){
    this.letrasSeleccionadas.push(...this.palabra);
    this.mostrarMensajeFinal = true;
    this.mensajeFinal = "PERDISTE!";
  }


}
