import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdivinaNumeroComponent } from './components/adivina-numero/adivina-numero.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContadorComponent } from './components/contador/contador.component';
import { DadoComponent } from './components/dado/dado.component';
import { JuegodadosComponent } from './components/juegodados/juegodados.component';
import { HomeComponent } from './components/home/home.component';
import { ImagenesComponent } from './components/imagenes/imagenes.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { DiferenciasComponent } from './components/diferencias/diferencias.component';
import { RouterModule } from '@angular/router';
import { ImagenesContadorComponent } from './components/imagenes-contador/imagenes-contador.component';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaNumeroComponent,
    AdminComponent,
    ContadorComponent,
    DadoComponent,
    JuegodadosComponent,
    HomeComponent,
    ImagenesComponent,
    PeliculasComponent,
    DiferenciasComponent,
    ImagenesContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
