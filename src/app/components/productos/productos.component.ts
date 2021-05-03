import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UsuarioModel } from 'src/models/usuario.models';
import { NgForm } from '@angular/forms';
import {FormularioService} from '../../services/formulario.service'


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  usuario: UsuarioModel  = new UsuarioModel ();
  // data: any [] =[];

  // constructor( private http: HttpClient) {
  //   this.http.get('https://blackisp.herokuapp.com/postalCodes/89000')
  //     .subscribe ( (repuesta: any) =>{
  //       this.data = repuesta
  //       console.log(repuesta);
  //     });

  // }
   constructor( private auth:FormularioService ) {
    

  }


  ngOnInit(){}

  onSubmit(form: NgForm){

    if (form.invalid){return;}
    // console.log('Formulario enviado');
    // console.log(this.usuario);
    // console.log(form);

    this.auth.createUsuario(this.usuario)
    .subscribe(respuesta => {
      console.log(respuesta);
    }, (err) =>{
      console.log(err.error.error.message);
    });

  }

}
