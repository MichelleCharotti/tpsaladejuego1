import { Component, Renderer2 } from '@angular/core';
import { MazoDeCartas } from './mazo-cartas';
import { Carta } from '../../interfaces/carta';
import { UsuarioService } from '../../servicios/usuario.service';
import { DbUsuariosService, TipoPuntaje } from '../../servicios/db-usuarios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';


enum Estado{
  gano,
  perdio,
  empato
}

@Component({
  selector: 'app-mayor-menor',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,RouterOutlet,RouterModule,RouterLinkActive],
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.scss'
})
export class MayorMenorComponent {

  public mazo = new MazoDeCartas(false);
  public cartaVisible?: Carta;
  public cartaAdivinar?: Carta;
  public mostrarMensajeFinal: boolean = false;
  public mensajeFinal: string= "";
  public estado: Estado = Estado.empato;
  public puntajeActual: number = 0;

  constructor(private user: UsuarioService,
              private db: DbUsuariosService,
              private preload: Renderer2){
    this.preCargarImagenes(this.generarListaImagenes());
	  if(this.user.datos){
		  this.puntajeActual = this.user.datos.puntajeMaxMayorMenor;
	  }
    this.generarNuevaRonda();
  }

  get imagenCartaVisible(){
    let codigo = "0";
    if(this.cartaVisible){
      codigo = this.cartaVisible.codigo;
    }
    return "../../../assets/cartas/"+codigo+".png";
  }

  get imagenCartaAdivinar(){
    let codigo = "0";
    if(this.cartaAdivinar){
      codigo = this.cartaAdivinar.codigo;
    }
    return "../../../assets/cartas/"+codigo+".png";
  }

  generarNuevaRonda(){
    if(this.mazo.restantes < 15){
      this.mazo.reiniciarMazo();
    }
    this.cartaAdivinar = undefined;
    this.cartaVisible = undefined;
    setTimeout(() => {
      this.cartaVisible = this.mazo.obtenerCarta();
    }, 500);
    this.mostrarMensajeFinal = false;
    this.mensajeFinal = "";
  }

  private adivinar(){
    this.mostrarMensajeFinal = true;

    this.cartaAdivinar = this.mazo.obtenerCarta();
    if(this.cartaAdivinar?.valor == this.cartaVisible?.valor){
      this.empatar();
      return false;
    }
    return true;
  }

  adivinarMayor(){
    if(this.adivinar()){
      if(this.cartaAdivinar!.valor > this.cartaVisible!.valor){
        this.ganar();
      }
      else{
        this.perder();
      }
    }
  }

  adivinarMenor(){
    if(this.adivinar()){
      if(this.cartaAdivinar!.valor < this.cartaVisible!.valor){
        this.ganar();
      }
      else{
        this.perder();
      }
    }
  }

  private ganar(){
    this.estado = Estado.gano;
    this.mensajeFinal = "GANASTE 1 PUNTO"; 
    this.guardarPuntaje();
  }

  private perder(){
    this.estado = Estado.perdio;
    this.mensajeFinal = "PERDISTE";
  }

  private empatar(){
	this.estado = Estado.empato;
    this.mensajeFinal = "EMPATE";
  }

  private guardarPuntaje(){
	this.puntajeActual += 1;
    if(this.user.datos?.id){
      this.user.datos.puntajeMaxMayorMenor = this.puntajeActual;
      this.db.actulizarPuntaje(TipoPuntaje.mayorMenor, this.user.datos.id, this.user.datos.puntajeMaxMayorMenor);
    }
  }

  private preCargarImagenes(imagenUrls: string[]): void {
    imagenUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      this.preload.appendChild(document.body, img);
      document.body.removeChild(img);
    });
  }
  private generarListaImagenes(){
    let imagenes = [];
    const textoBase = "../../../assets/cartas/";
    for(let i = 1;i< 11; i++){
      imagenes.push(textoBase+"P"+i+".png");
      imagenes.push(textoBase+"D"+i+".png");
      imagenes.push(textoBase+"C"+i+".png");
      imagenes.push(textoBase+"T"+i+".png");
    }
    return imagenes;
  }

}
