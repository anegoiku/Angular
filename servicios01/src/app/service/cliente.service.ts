import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';

@Injectable(
  // {providedIn: 'root'}
)

export class ClienteService {
  public clientes : Array <Cliente>;
  constructor() {
    this.clientes = [
      new Cliente(1, "Begoña", "Bagoñez", 25, 150.75),
      new Cliente(2, "Jons", "Zabala", 32, 200.00),
      new Cliente(3, "Robert", "Rosu", 40, 350.50),
      new Cliente(4, "Pablo", "Perucha", 28, 120.00),
      new Cliente(5, "Anton", "Tschanz", 35, 180.25),
      new Cliente(6, "Joni", "Alberdi", 30, 240.00),
      new Cliente(7, "Marian", "Arriola", 22, 300.00),
      new Cliente(8, "Ramiro", "Ramírez", 27, 95.50),
      new Cliente(9, "Gonzalo", "Gonzalez", 45, 400.00),
      new Cliente(10, "Rodrigo", "Rodriguez", 29, 220.75)
    ]
  }

  getCliente() : Array<Cliente>{
    return this.clientes;
  }
}
