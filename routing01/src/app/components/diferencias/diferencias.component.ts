import { Component } from '@angular/core';

@Component({
  selector: 'app-diferencias',
  templateUrl: './diferencias.component.html',
  styleUrls: ['./diferencias.component.scss']
})
export class DiferenciasComponent {
  vResultado = false;
  oResultado = false;

  verResultado(){
    this.vResultado = true;
    this.oResultado =true;
  }

  ocultarResultado(){
    this.vResultado = false;
    this.oResultado =false;
  }
}
