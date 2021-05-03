import { Component, OnInit } from '@angular/core';
import { Formulario } from 'src/app/interfaces/formulario';
import {FormularioService} from '../../services/formulario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  checked = true;

  constructor(private formularioService: FormularioService) {}

  ngOnInit(): void {
  } 
  
  getAlldatos(){
    this.formularioService.getAlldatos()
    .subscribe ( data  =>{
      console.log(data);
    });
  }
}
