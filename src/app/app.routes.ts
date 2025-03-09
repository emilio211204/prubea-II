import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DocentesComponent } from './pages/docentes/docentes.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';
import { LoginComponent } from './pages/login/login.component';
import { loginGuard } from './guards/login.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'docente',
        component:DocentesComponent,
        canActivate: [loginGuard]
    },
    {
        path: 'estudiantes',
        component:EstudiantesComponent,
        canActivate: [loginGuard]
    },
    {
        path: 'login',
        component:LoginComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
