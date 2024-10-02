import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AhorcadoComponent } from './componentes/ahorcado/ahorcado.component';
import { PreguntadosComponent } from './componentes/preguntados/preguntados.component';
import { MayorMenorComponent } from './componentes/mayor-menor/mayor-menor.component';
import { BuscaminaComponent } from './componentes/buscamina/buscamina.component';



export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch: "full"}, 
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'quien-soy', component: QuienSoyComponent},
    { path: 'registro', component: RegistroComponent},
    {  path: "ahorcado", component: AhorcadoComponent,
        loadChildren: () => import('./modulos/ahorcado/ahorcado.module').then(m => m.AhorcadoModule)
    },
    { path: "preguntados", component: PreguntadosComponent,
        loadChildren: () => import('./modulos/preguntados/preguntados.module').then(m => m.PreguntadosModule)
    },
    { path: "mayor-menor", component: MayorMenorComponent,
        loadChildren: () => import('./modulos/mayormenor/mayormenor.module').then(m => m.MayormenorModule)
    },
    { path: "buscamina", component: BuscaminaComponent,
        loadChildren: () => import('./modulos/buscamina/buscamina.module').then(m => m.BuscaminaModule)
    }
];
