import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  autenticacion(): any {
    if (typeof window !== 'undefined' && window.localStorage) {
      const login = localStorage.getItem('login') === 'true';
      const docente = localStorage.getItem('docente') === 'true';
      const estudiantes = localStorage.getItem('estudiantes') === 'true';

      return {
        mostrarDocente: login && docente,
        mostrarEstudiantes: login && estudiantes,
        mostrarLogin: !login
      };
    }
    return false;
  }
}
