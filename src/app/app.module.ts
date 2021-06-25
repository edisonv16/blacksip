import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';


//api
import { HttpClientModule } from "@angular/common/http";
//rutas
import { APP_ROUTING} from "./app.routes";
//servicios

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
//componenentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ContentComponent } from './components/content/content.component';
import { from } from 'rxjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TitleComponent } from './components/title/title.component';
import { ReactiveComponent } from './components/productos/reactive/reactive.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductosComponent,
    ContentComponent,
    TitleComponent,
    ReactiveComponent,

  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
