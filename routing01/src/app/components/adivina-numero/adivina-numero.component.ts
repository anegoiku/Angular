import { Component } from '@angular/core';

@Component({
  selector: 'app-adivina-numero',
  templateUrl: './adivina-numero.component.html',
  styleUrls: ['./adivina-numero.component.scss']
})
export class AdivinaNumeroComponent {

  private numeroSecreto:number = 0
  mensaje = "";

  generarNumero(){
    this.numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log("Numero generado: ${this.numeroSecreto}");
    this.mensaje = "Numero generado! Intenta adivinarlo :)";

  }
  intento(){
    const intento = document.getElementById('intento') as HTMLInputElement;
    const numero = parseInt(intento.value);

    if(this.numeroSecreto == 0){
      this.mensaje = "Primero debes generar un numero!"
    }

    if(numero === this.numeroSecreto){
      this.mensaje = "Felicidadeees!! Has adivinado el numero :)";
      this.numeroSecreto = 0;
    }else if(numero > this.numeroSecreto){
      this.mensaje = "Prueba con algo mas pequeño! :("
    }else if(numero < this.numeroSecreto){
      this.mensaje = "Prueba con algo mas grande! :("
    }
  }
}
