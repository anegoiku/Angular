import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JuegodadosComponent } from './components/juegodados/juegodados.component';
import { AdivinaNumeroComponent } from './components/adivina-numero/adivina-numero.component';
import { ContadorComponent } from './components/contador/contador.component';
import { AdminComponent } from './components/admin/admin.component';
import { DiferenciasComponent } from './components/diferencias/diferencias.component';
import { HomeComponent } from './components/home/home.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'juegodados', component: JuegodadosComponent },
  { path: 'adivina-numero', component: AdivinaNumeroComponent },
  { path: 'contador', component: ContadorComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'imagenes', component: ImagenesComponent, children: [
    {path: 'diferencias', component: DiferenciasComponent } ,
    {path: 'peliculas', component: PeliculasComponent }

  ]},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
