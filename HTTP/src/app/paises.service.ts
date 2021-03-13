import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  url: string;

  constructor(private http: HttpClient) { 
    this.url = 'https://restcountries.eu/rest/v2/regionalbloc/eu';
  }

  getPaises(): Promise<any[]>{
    return this.http.get<any[]>(this.url).toPromise();
  }
}


