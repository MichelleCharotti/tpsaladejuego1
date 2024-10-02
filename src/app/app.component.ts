import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router,RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterModule,RouterLinkActive,CommonModule,HeaderComponent,ChatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tpsaladejuego1';
}
