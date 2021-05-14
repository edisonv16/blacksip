import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{UsuarioModel} from '../../models/usuario.models';
import{map} from'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormularioService {


  constructor(private http: HttpClient ) {}


  getProductos(){
    const path ='https://blackisp.herokuapp.com/products';
    return this.http.get( path);
  }

  getAlldatos(){
    const path ='https://blackisp.herokuapp.com/postalCodes/89000';
    return this.http.get<formularioModel[]>(path);
  }
  
  createUsuario(usuario: UsuarioModel){
    const path = 'https://crud-cb55d-default-rtdb.firebaseio.com/producto.json';
    // const path = 'https://blackisp.herokuapp.com/contact';
    return this.http.post( path, usuario)
    .pipe(
      map( (resp: any) => {
        usuario.id =  resp.name;
        return usuario;
      })
    )
  }
}

export interface formularioModel {
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
