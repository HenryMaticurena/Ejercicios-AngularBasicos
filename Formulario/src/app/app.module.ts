import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Librerias necesarias para formulario
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './template/template.component';
import { ModelComponent } from './model/model.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaEmpleadosComponent } from './components/lista-empleados/lista-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ModelComponent,
    FormularioComponent,
    ListaEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
