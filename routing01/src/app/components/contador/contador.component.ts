import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent {
numero = 0;

//MENOS
menos100(){
  this.numero = this.numero - 100 ;
}

menos50(){
  this.numero = this.numero - 50 ;
}

menos20(){
  this.numero = this.numero - 20 ;
}

menos10(){
  this.numero = this.numero - 10 ;
}

menos5(){
  this.numero = this.numero - 5 ;
}

menos2(){
  this.numero = this.numero - 2 ;
}

menos1(){
  this.numero = this.numero - 1 ;
}

//RESET
reset(){
  this.numero = 0 ;
}

//MAS
mas1(){
  this.numero = this.numero + 1 ;
}

mas2(){
  this.numero = this.numero + 2 ;
}

mas5(){
  this.numero = this.numero + 5 ;
}

mas10(){
  this.numero = this.numero + 10 ;
}

mas20(){
  this.numero = this.numero + 20 ;
}

mas50(){
  this.numero = this.numero + 50 ;
}

mas100(){
  this.numero = this.numero + 100 ;
}

}
