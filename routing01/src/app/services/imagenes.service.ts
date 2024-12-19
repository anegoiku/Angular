import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  valor : boolean;
  valorContador:number;

  constructor() {
    this.valor = false;
    this.valorContador = 0;
  }

  setValor(valor:boolean){
    this.valor = valor;
  }

  getValor(){
    return this.valor;
  }

  setValorContador(valorContador:number){
    this.valorContador = valorContador;
  }

  getValorContador(){
    return this.valorContador;
  }
}
