import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DbUsuariosService } from '../../servicios/db-usuarios.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Router, RouterEvent } from '@angular/router';
import { Usuario } from '../../interfaces/usuario';
import { confirmarClave, usuarioExiste } from '../../validators/validators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.scss'
})
export class RegistroComponent {

  public formularioRegistro: FormGroup;

  constructor(private dbUsuarios: DbUsuariosService, 
            private login: UsuarioService,
            private router: Router) {
    this.formularioRegistro = new FormGroup({
      nombre: new FormControl("", [Validators.required, Validators.email], usuarioExiste(dbUsuarios)),
      password: new FormControl("", [Validators.minLength(16), Validators.required]),
      repetirPassword: new FormControl("", [Validators.minLength(16), Validators.required]) 
    }, [confirmarClave()]);
  }


  generarUsuario(){
    this.limpiarEspacios();
    let usuario: Usuario = {nombre: this.formularioRegistro.value.nombre,
                           password: this.formularioRegistro.value.password,
                         };

    this.dbUsuarios.guardarUsuario(usuario);
    this.login.iniciar(usuario)
    this.dbUsuarios.generarLogUsuario(usuario);
    this.router.navigate(["/home"]);
  }

  private limpiarEspacios(){
    this.formularioRegistro.get('nombre')?.setValue(this.formularioRegistro.get('nombre')?.value.trim());
    this.formularioRegistro.get('password')?.setValue(this.formularioRegistro.get('password')?.value.trim());
    this.formularioRegistro.get('repetirPassword')?.setValue(this.formularioRegistro.get('repetirPassword')?.value.trim());
  }
}
