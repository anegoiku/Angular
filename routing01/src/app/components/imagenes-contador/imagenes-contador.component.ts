import { ImagenesService } from './../../services/imagenes.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-imagenes-contador',
  templateUrl: './imagenes-contador.component.html',
  styleUrls: ['./imagenes-contador.component.scss']
})
export class ImagenesContadorComponent {
  title = 'apliComponent2';
  counterValue : number = 0;

  constructor(public imagenesService : ImagenesService){}

  increse(){
    this.counterValue++;
    this.imagenesService.setValorContador(this.imagenesService.getValorContador() + 1);
  }

  decrese(){
    this.counterValue--;
    this.imagenesService.setValorContador(this.imagenesService.getValorContador() + 1);
  }

}
