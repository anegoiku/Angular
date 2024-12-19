import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-detalles',
  template: "Message from parent: {{personaId}} {{personaNombre}} {{personaApe}} {{personaEdad}} {{personaCant}}",
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
  providers: [ClienteService]
})
export class DetallesComponent {
  constructor(private _clienteService : ClienteService){
    this.clientes = this._clienteService.getCliente();
  }
public cliente:Cliente = new Cliente(0,"", '', 0,0);

public clientes: Array<Cliente>;

@Input () persona:Cliente = new Cliente(0,"", '', 0,0);
@Input () posicion:number = 0;

@Output () editar = new EventEmitter();

modificarCliente(){
  this.cliente= this.persona;
  this.editar.emit(this.cliente);
  this.clientes= this._clienteService.getCliente();

  this.clientes[this.posicion] = this.cliente;

}
}
