import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {
  mensajeFrozen = "";
  mensajeHarry = "";
  mensajePanda = "";
  mensajeCenicienta = "";
  mensajeUp = "";

  frozenMetodo(input : string){
    if(input.trim() == ""){
      this.mensajeFrozen = "Primero debes escribir un titulo!"
    }else if(input.trim().toLowerCase() == "frozen" ){
      this.mensajeFrozen = "Felicidadeees!! Has adivinado la pelicula :)";
    }else{
      this.mensajeFrozen = "Ohhh!Noooo!:( --> Prueba a escribirlo bienn :)";
    }
  }


  harryPotterMetodo(input : string){
    if(input.trim() == ""){
      this.mensajeHarry = "Primero debes escribir un titulo!"
    }else if(input.trim().toLowerCase() == "harry potter" ){
      this.mensajeHarry = "Felicidadeees!! Has adivinado la pelicula :)";
    }else{
      this.mensajeHarry = "Ohhh!Noooo!:( --> Prueba a escribirlo bienn :)";
    }
  }

  kungFuPandaMetodo(input : string){
    if(input.trim() == ""){
      this.mensajePanda = "Primero debes escribir un titulo!"
    }else if(input.trim().toLowerCase() == "kung fu panda" ){
      this.mensajePanda = "Felicidadeees!! Has adivinado la pelicula :)";
    }else{
      this.mensajePanda = "Ohhh!Noooo!:( --> Prueba a escribirlo bienn :)";
    }
  }

  laCenicientaMetodo(input : string){
    if(input.trim() == ""){
      this.mensajeCenicienta = "Primero debes escribir un titulo!"
    }else if(input.trim().toLowerCase() == "la cenicienta" ){
      this.mensajeCenicienta = "Felicidadeees!! Has adivinado la pelicula :)";
    }else{
      this.mensajeCenicienta = "Ohhh!Noooo!:( --> Prueba a escribirlo bienn :)";
    }
  }

  upMetodo(input : string){
    if(input.trim() == ""){
      this.mensajeUp = "Primero debes escribir un titulo!"
    }else if(input.trim().toLowerCase() == "up" ){
      this.mensajeUp = "Felicidadeees!! Has adivinado la pelicula :)";
    }else{
      this.mensajeUp = "Ohhh!Noooo!:( --> Prueba a escribirlo bienn :)";
    }
  }
}
