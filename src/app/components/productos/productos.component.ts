import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import {FormularioService} from '../../services/formulario.service';
import { UsuarioModel } from 'src/models/usuario.models';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  usuario: UsuarioModel  = new UsuarioModel ();
  constructor( private formularioService:FormularioService ) {}
  ngOnInit(){}

  

  getAlldatos(){
    this.formularioService.getAlldatos()
    .subscribe ((respuesta:any)  => {
      this.usuario = respuesta;
    });
  }

  contacto(f: NgForm){
    if (f.invalid){return;}
    this.formularioService.createUsuario(this.usuario)
    .subscribe((respuesta: any) => {
      this.usuario = respuesta;
    });
  }

}