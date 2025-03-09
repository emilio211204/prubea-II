import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  private API_USUARIOS = 'http://localhost:3000/login';

  getlogin():Observable<any>{
    return this.http.get(this.API_USUARIOS);
  }

  postlogin(docente:any):Observable<any>{
    return this.http.post(this.API_USUARIOS, docente);
  }
}
