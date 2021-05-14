import { Component, OnInit } from '@angular/core';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  productos: any [] =[];
  total:number;

  constructor(
    private productosServices: FormularioService) {
  }
  ngOnInit(): void {

    this.productosServices.getProductos().subscribe ((repuesta: any) =>{
        this.productos = repuesta;

        this.total = this.productos.reduce((acc,item) =>{
        return acc = parseInt(acc) + parseInt(item.price); 
        },0);
      });

    //Calculamos el TOTAL 
    
  }

}
