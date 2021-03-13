import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PaisesService } from './paises.service';
import { PersonajesService } from './personajes.service';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 /*  arrPosts: any[];
  formulario: FormGroup;

  constructor(private postsService: PostsService) {
    this.formulario = new FormGroup({
      title: new FormControl(''),
      body: new FormControl(''),
      userId: new FormControl('')
    });
  }

  ngOnInit() {
    this.postsService.getAll()
    .then(post => this.arrPosts = post)
    .catch(error => console.log(error));
  }

  async onClick(postId) {
    try {
      const post= await this.postsService.getById(postId);
      console.log(post);
    } catch (error) {
      console.log(error);
    }
  }

  onClickPost() {
    this.postsService.create({
      title:'Nuevo',
      body: 'Cuerpo del post',
      userId: 1
    }).then(response => console.log(response))
    .catch(error => console.log(error));
  }

  async onSubmit(){
    try{
      const response = await this.postsService.create(this.formulario.value);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  onClickUpdate() {
    this.postsService.update({
      id: 5,
      title: 'Fenix',
      body: 'Darrrrrr',
      userId: 1
    }).then(response => console.log(response))
    .catch(error => console.log(error));
  }

  async onClickDelete() {
    try { 
    const response = await this.postsService.delete(5);
    console.log(response);
    } catch (error) {
      console.log(error);
    }
  } */

  // Ejercicio 1

/*   paises: any[];

  constructor(private paisesService: PaisesService) { }

  async ngOnInit() {
    this.paises = await this.paisesService.getPaises();
    console.log(this.paises);
  } */

   // Ejercicio 2

  arrPersonajes: any[];
  currentPage: number;
  numPages: number;

  constructor(private personajesService: PersonajesService) {
    this.currentPage = 1;
  }

  ngOnInit() {
    this.personajesService.getAll()
    .then(response => {
      this.arrPersonajes = response['results'];
      this.numPages = response['info']['pages'];
    });
  }

  async changePage(siguiente) {
    if(siguiente) {
      this.currentPage++;
    } else {
      this.currentPage--;
    }
    const response = await this.personajesService.getAll(this.currentPage);
    this.arrPersonajes = response['results'];
  }

}
