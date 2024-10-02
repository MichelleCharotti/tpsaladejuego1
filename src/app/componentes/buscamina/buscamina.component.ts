import { Component } from '@angular/core';
import { Board } from './board';
import { Cell } from './cell';
import { UsuarioService } from '../../servicios/usuario.service';
import { CommonModule } from '@angular/common';
import { DbUsuariosService, TipoPuntaje } from '../../servicios/db-usuarios.service';

@Component({
  selector: 'app-buscamina',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscamina.component.html',
  styleUrl: './buscamina.component.scss'
})
export class BuscaminaComponent {
  mostrarMensajeFinal: boolean = false; 
  mensajeFinal: string = "";
  errores: number = 0; 
  board: Board;

  constructor(private user:UsuarioService, private db: DbUsuariosService) {
    this.reinicio();
    this.board= new Board(20,50);
  }

  checkCell(cell: Cell) {
    const result = this.board.checkCell(cell);
    
    if (result === 'gameover') {
      this.Perder();
    } else if (result === 'win') {
      this.ganoElJuego();
    }
  }
  flag(cell: Cell) {
    if (cell.status === 'flag') {
      cell.status = 'open';
    } else {
      cell.status = 'flag';
    }
  }

  reinicio() {
    this.board = new Board(20, 50);
    this.mostrarMensajeFinal = false;
    this.errores = 0;
  }


  private ganoElJuego(){
    const puntaje = Math.max(1, 10);
    this.mostrarMensajeFinal = true;
    this.mensajeFinal = "GANASTE"; 
    if(this.user.datos?.id){
      this.mensajeFinal = this.mensajeFinal +" "+ puntaje + " PUNTOS!!";
      this.user.datos.puntajeMaxBuscamina = puntaje + this.user.datos.puntajeMaxBuscamina;
      this.db.actulizarPuntaje(TipoPuntaje.buscamina, this.user.datos.id, this.user.datos.puntajeMaxBuscamina);
    }
    this.calcularVictoria();
  }

  private Perder(){
    this.mostrarMensajeFinal = true;
    this.mensajeFinal = "PERDISTE!";
    this.calcularDerrota();
  }

  calcularVictoria(): boolean {
    return true;
  }
  
  calcularDerrota(): boolean {
    return this.errores ==6;
  }
}
