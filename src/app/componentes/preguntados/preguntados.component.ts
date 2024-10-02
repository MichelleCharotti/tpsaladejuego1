import { Component, OnInit } from '@angular/core';
import { DbUsuariosService, TipoPuntaje } from '../../servicios/db-usuarios.service';
import { PreguntasService } from '../../servicios/preguntas.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Pregunta } from '../../interfaces/pregunta';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Ipais } from '../../interfaces/ipais';


@Component({
  selector: 'app-preguntados',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterOutlet,RouterLink,RouterModule,RouterLinkActive],
  templateUrl: './preguntados.component.html',
  styleUrl: './preguntados.component.scss'
})
export class PreguntadosComponent {
  public generandoPregunta = false;
	public mostrandoMensajeFinal = false;
	public gano = false;
	public mensajeFinal = "";
	public pregunta = "";
	public tema = "";

  quizzes:any[] = [];
  currentQuiz:number=0;
  banderaPais:Ipais={
    nombre:"",
    bandera:"",
  };
  prevAnswered:any[] = [];
  
  constructor(private preguntas: PreguntasService, private db: DbUsuariosService,private user: UsuarioService,public http:HttpClient) {}

  ngOnInit() {
    this.iniciarJuego();
    }
  
    iniciarJuego(){
    this.generandoPregunta = true;
    this.mostrandoMensajeFinal = false;
    this.mensajeFinal = "";
    this.pregunta = "Generando Pregunta...";

    this.quizzes = this.preguntas.getPaises();
    this.currentQuiz = this.random(0,9);
    this.prevAnswered.push(this.currentQuiz);
    this.obtenerPregunta();

    }
  
    seleccionarRespuesta(estado: boolean){
    if(estado){
      this.ganar();
    }
    else{
      this.perder();
    }
    this.mostrandoMensajeFinal = true;
    }
  
    private ganar(){
      if(this.user.datos?.id){
      this.user.datos.puntajeMaxPreguntados++;
      this.db.actulizarPuntaje(TipoPuntaje.preguntados, this.user.datos.id, this.user.datos.puntajeMaxPreguntados);
      }
    
    this.gano = true;
    this.mensajeFinal="RESPUESTA CORRECTA!!";
    }
  
    private perder(){
    this.gano = false;
    this.mensajeFinal="RESPUESTA INCORRECTA ";
    }
  

    private obtenerPregunta(){
     const sub= this.http.get(`https://restcountries.com/v3.1/name/${this.quizzes[this.currentQuiz].country}`).subscribe(
        (lista:any)=>{
          lista.forEach((pais: any) => {
            var pais2:Ipais={
              bandera:pais.flags.png,
              nombre:pais.name.common,
            };
          this.banderaPais=pais2;
          });
          sub.unsubscribe();
        }
      );
      this.generandoPregunta = false;
    }
  
  
    private random(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
}
