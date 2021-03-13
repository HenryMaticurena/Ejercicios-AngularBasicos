import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/empleados.service';
import { Empleado } from 'src/app/models/empleado.model';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {

  empleados: Empleado[];

  constructor(private empleadoService: EmpleadosService) { }

  ngOnInit(): void {
    this.empleadoService.getAll()
    .then(arrEmpleados => {
      this.empleados = arrEmpleados;
    })
  }

}
