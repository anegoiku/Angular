import { Component } from '@angular/core';

@Component({
  selector: 'app-juegodados',
  templateUrl: './juegodados.component.html',
  styleUrls: ['./juegodados.component.scss']
})
export class JuegodadosComponent {
  dados: number[] = [];
  mensaje:string='';

  tirarDados() {
    this.dados = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1
    ];
    this.comprobarNumeros(this.dados);
  }

  comprobarNumeros(dados:number[]){
    if(dados[0]===dados[1]&&dados[1]===dados[2]){
      this.mensaje="Felicidadees!! Has ganado un abrazo :) a no ser que seas Jon ¦| -_-";
    } else {
      this.mensaje="Intentalo otra vez! :(";
    }
  }
}
