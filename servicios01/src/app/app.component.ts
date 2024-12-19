import { Component} from '@angular/core';
import { Cliente } from './models/cliente';
import { ClienteService } from './service/cliente.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ClienteService]
})
export class AppComponent {
  title = 'servicios01';
  public clientes : Array<Cliente>;
  public persona:Cliente = new Cliente(0,"", '', 0,0);
  public posicion : number = 0;


  constructor(private _clienteService : ClienteService){
    this.clientes = [];
  }
  ngOnInit(){
    this.clientes= this._clienteService.getCliente();
  }

  public sacarDatos(persona:Cliente ,posicion:number){
   this.persona = persona;
   this.posicion = posicion;
  }
  modifCliente(event:Cliente){
    this.persona = event;
    alert("Modificacion realizada" + "-" + this.persona.nombre + "-" + this.persona.apellido + "-" + this.persona.edad + "-" + this.persona.cantidad);
  }
}
