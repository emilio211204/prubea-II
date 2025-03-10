import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  constructor(private servicio:LoginService, private route:Router) { }

  email : any ; 
  password : any ;

login(formulario: any) {
  const email = formulario.value.email;
  if (email === 'emilio@gmail.com') {
    localStorage.setItem('login', "true");
    this.route.navigate(['docente']);
  } else if (email === 'mateo@gmail.com') {
    localStorage.setItem('login', "true");
    this.route.navigate(['estudiantes']);
  }
}

}
