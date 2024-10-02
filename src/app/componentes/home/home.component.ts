import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router,RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { UsuarioService } from '../../servicios/usuario.service';
import { DbUsuariosService } from '../../servicios/db-usuarios.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private subscripcion:  Array<Subscription> = [];

  constructor(private _usuario: UsuarioService, private db: DbUsuariosService) {
    
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

}
