import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router,RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { DbUsuariosService, TipoPuntaje } from '../../servicios/db-usuarios.service';
import { Subscription } from 'rxjs';
import { Usuario } from '../../interfaces/usuario';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private subscripcion:  Array<Subscription> = [];
  public topAhorcado: Array<Usuario> = [];
  public topPreguntados: Array<Usuario> = [];
  public topMayorMenor: Array<Usuario> = [];
  public topBuscamina: Array<Usuario> = [];

  constructor(private _usuario: UsuarioService, private db: DbUsuariosService) {
    this.obtenerTopAhorcado();
    this.obtenerTopMayorMenor();
    this.obtenerTopPreguntados();
    this.obtenerTopBuscamina();
  }

  ngOnDestroy(){
    if(this.subscripcion)
    {
      for(let sub of this.subscripcion) {
        sub.unsubscribe();
      }
    }
  }
  get usuario(){
    return this._usuario;
  }

  private obtenerTopAhorcado(){
    const sub = this.db.obtenerTop(TipoPuntaje.ahorcado).subscribe(datos=>{
      this.topAhorcado = datos;
    })
    this.subscripcion.push(sub);
  }

  private obtenerTopMayorMenor(){
    const sub = this.db.obtenerTop(TipoPuntaje.mayorMenor).subscribe(datos=>{
      this.topMayorMenor = datos;
    })
    this.subscripcion.push(sub);
  }

  private obtenerTopPreguntados(){
    const sub = this.db.obtenerTop(TipoPuntaje.preguntados).subscribe(datos=>{
      this.topPreguntados = datos;
    })
    this.subscripcion.push(sub);
  }

  private obtenerTopBuscamina(){
    const sub = this.db.obtenerTop(TipoPuntaje.buscamina).subscribe(datos=>{
      this.topBuscamina= datos;
    })
    this.subscripcion.push(sub);
  }
}
