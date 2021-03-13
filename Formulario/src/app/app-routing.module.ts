import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';
import { ModelComponent } from './model/model.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
/*   { path: '', pathMatch: 'full', redirectTo: '/model'},
  { path: 'template', component: TemplateComponent },
  { path: 'model', component: ModelComponent },
  { path: '**', redirectTo: '/model' } */
//Ejercicio
{ path: '', pathMatch: 'full', redirectTo: '/list'},
{ path: 'new', component: FormularioComponent },
{ path: 'list', component: ListaEmpleadosComponent },
{ path: '**', redirectTo: '/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
