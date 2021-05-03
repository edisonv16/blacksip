import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { ProductosComponent } from './components/productos/productos.component';



const APP_ROUTES: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'contenedor', component: ContentComponent },
    { path: 'productos', component: ProductosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);