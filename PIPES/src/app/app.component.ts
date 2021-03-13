import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // CurrencyPipe
  precio: number;

  // DecimalPipe
  numero: number;

  // DatePipe
  fechaActual: Date;

  // PercentPipe
  numAleatorio: number;

  //JsonPipe
  estudiante: any;

  // Lower, Upper, Title
  texto: string;

  // SlicePipe
  animales: string[];
  minimo: number;
  maximo: number;

  // AsyncPipe
  prom: Promise<string>;
  promPosts: Promise<any[]>;

  constructor(private postService: PostsService) {
    this.precio = 198.87888;
    this.numero = 3.812654879;
    this.fechaActual = new Date();
    this.numAleatorio = Math.random();
    this.estudiante = {
      nombre: 'Zero',
      apellidos: 'Dark',
      edad: 20,
      notas: [3,4,5,7]
    };
    this.texto = 'Luz y oscuridad son uno, la verdadera fuerza nace';
    this.animales = ['perro','gato','leon','dragon']
    this.minimo = 0;
    this.maximo = this.animales.length;
    this.prom = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Sse resuelve la promesa en 4 segundos'), 4000);
    });

    this.promPosts = this.postService.getAll();
  }

  ngOnInit() {
    setInterval(() => this.fechaActual = new Date(),1000);
  }

}
