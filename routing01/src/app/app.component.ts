import { ImagenesService } from 'src/app/services/imagenes.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing01';
  opcion: boolean = false;
  valor :boolean;

  ngOnInit(){}
  constructor(private router:Router, private imagenesService:ImagenesService){
    this.valor = imagenesService.getValor();
  }

  verComponentImg(){
    this.valor = true;
    this.imagenesService.setValor(this.valor);
    this.router.navigate(['imagenes']);
  }

  peliculas(){
    this.valor = false;
    this.imagenesService.setValor(this.valor);
    this.router.navigate(['imagenes/peliculas']);
  }

  diferencias(){
    this.valor = false;
    this.imagenesService.setValor(this.valor);
    this.router.navigate(['imagenes/diferencias']);
  }


  onLoadAdmin(){
    this.opcion = confirm('Eres el administrador +18?');
    if(this.opcion == true){
      this.router.navigate(['admin']);
    }else{
      this.router.navigate(['home']);
    }
  }
}
