import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactiveComponent } from './components/productos/reactive/reactive.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'reactive', component: ReactiveComponent},
  {path:'**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
