import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';


export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch: "full"}, 
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'quien-soy', component: QuienSoyComponent},
    { path: 'registro', component: RegistroComponent},
    {  path: "ahorcado", 
        loadComponent: () => import('./componentes/ahorcado/ahorcado.component').then(m => m.AhorcadoComponent)
    },
    { path: "preguntados", 
        loadComponent: () => import('./componentes/preguntados/preguntados.component').then(m => m.PreguntadosComponent)
    },
    { path: "mayor-menor", 
        loadComponent: () => import('./componentes/mayor-menor/mayor-menor.component').then(m => m.MayorMenorComponent)
    },
    { path: "buscamina", 
        loadComponent: () => import('./componentes/buscamina/buscamina.component').then(m => m.BuscaminaComponent)
    },
    {path: "encuesta",
        loadComponent:() => import('./componentes/encuesta/encuesta.component').then(m => m.EncuestaComponent) 
    }
];
