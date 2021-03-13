import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';

@Component({
  selector: 'app-mapa-libreria',
  templateUrl: './mapa-libreria.component.html',
  styleUrls: ['./mapa-libreria.component.css']
})
export class MapaLibreriaComponent implements OnInit {

  latitud: number;
  longitud: number;

  paises: any[];

  constructor(private paisesService: PaisesService) { 
    this.latitud = 40;
    this.longitud = -3;
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.latitud = position.coords.latitude;
      this.longitud = position.coords.longitude;
    });
    this.paisesService.getPaisesEuropeos()
    .then(response => {
      this.paises = response;
    });
  }

}
