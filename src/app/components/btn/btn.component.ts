import { Component, OnInit } from '@angular/core';
import { Formulario } from '../../interfaces/formulario';
import { UsuarioModel } from 'src/models/usuario.models';
import { FormularioService } from "../../services/formulario.service";

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  contact: UsuarioModel  = new UsuarioModel ();

  constructor(private formularioservice: FormularioService ) { }

  ngOnInit(): void {
  }

  
  // createContacto(){
  //   const contact = {
  //     id: 0,
  //     nombre:'Edison',
  //     apellido: 'Ospina',
  //     email:'edisonv16@hotmail.com',
  //     tel: '3185735382',
  //     code: '89000',
  //     colonia: 'Colombia',
  //     region: 'Sur america',
  //     city: 'Bogotá',
  //     municipio: 'cundinamarca',
  //     calle:'carrera 19A#1sur-84',
  //   };
  //   this.formularioservice.createContacto(contact)
  //   .subscribe((resp)=>{
  //     console.log(resp);
  //   });
  // }

}
