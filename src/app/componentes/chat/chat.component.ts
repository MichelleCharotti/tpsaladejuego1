import { Component, NgModule } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioService } from '../../servicios/usuario.service';
import { Mensaje } from '../../interfaces/mensaje';
import { DbMensajesService } from '../../servicios/db-mensajes.service';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  public chatActivo:boolean = false;
  public mensajes: Mensaje[] = [];
  public nuevoMensaje = "";
  private observableMensajes?: Subscription;

  constructor(private usuario: UsuarioService, private dbMensajes: DbMensajesService){}

  get usuarioLogeado():boolean{
    return this.usuario.datos !== undefined;
  }
  ngDestroy(){
    if(this.observableMensajes)
      this.observableMensajes.unsubscribe();
  }
  abrirChat(){
    this.observableMensajes = this.dbMensajes.obtenerMensajes().subscribe(data=>{
      data = data.reverse();
      this.mensajes = data;
    })
    this.chatActivo = true;
    this.scrollChatAbajo();
  }

  private scrollChatAbajo(){
    setTimeout(() => {
      let chat = document.getElementById("chat");
      if(chat){
        chat.scrollTop += chat.scrollHeight;
      }
    }, 250);
  }

  cerrarChat(){
    this.chatActivo = false;
  }

  enviarMensaje(){
    this.scrollChatAbajo();
    if(this.usuario.datos && this.nuevoMensaje != ""){
      let hora = new Date().toISOString()
      console.log(hora);
      const mensaje: Mensaje = {autor: this.usuario.datos.nombre, hora: hora, texto: this.nuevoMensaje}; 
      this.dbMensajes.guardarMensaje(mensaje)
      this.nuevoMensaje = "";
    }
  }

  formatearMensaje(mensaje: Mensaje){
    let fecha = new Date(mensaje.hora);
    
    const hora = fecha.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false  });
    const autor = mensaje.autor.split("@")[0];
    return  hora+"| " + autor + ": " + mensaje.texto;
  }
}
