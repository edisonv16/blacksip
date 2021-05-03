import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  productos: any [] =[];

  constructor( private http: HttpClient) {
    this.http.get('https://blackisp.herokuapp.com/products')
      .subscribe ( (repuesta: any) =>{
        this.productos = repuesta
        console.log(repuesta);
      });

  }
  ngOnInit(): void {
  }

}
