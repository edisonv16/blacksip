import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{UsuarioModel} from '../../models/usuario.models';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {


  constructor(private http: HttpClient ) {}

  getAlldatos(){
    const path ='https://blackisp.herokuapp.com/postalCodes/89000';
    return this.http.get<Formulario[]>(path);
  }
  
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
export interface Formulario {
  id?: number,
  nombre?:string,
  apellido?: string,
  email?:string,
  tel?: string,
  code?: string,
  colonia?: string,
  region?: string,
  city?: string,
  municipio?: string,
  calle?:string,
}

