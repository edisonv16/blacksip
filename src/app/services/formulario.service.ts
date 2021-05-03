import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{Formulario} from '../interfaces/formulario';
import{UsuarioModel} from '../../models/usuario.models';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {


  constructor(private http: HttpClient ) {}
  
  createContacto(contact: Formulario){
    const path = 'https://jsonplaceholder.typicode.com/todos';
    // const path = 'https://blackisp.herokuapp.com/contact';
    return this.http.post(
      path, contact);
  }
  createUsuario(usuario: UsuarioModel){
    // const path = 'https://jsonplaceholder.typicode.com/todos';
    const path = 'https://blackisp.herokuapp.com/contact';

    return this.http.post(
      path, usuario);
  }
}
