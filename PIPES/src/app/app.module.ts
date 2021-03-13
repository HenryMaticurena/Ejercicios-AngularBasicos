import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
//librerias para pipes acorde al idioma deseado, en este caso español
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversoPipe } from './pipes/reverso.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { NumToArrPipe } from './pipes/num-to-arr.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    ReversoPipe,
    CapitalizePipe,
    NumToArrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-ES'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
