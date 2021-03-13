import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient: HttpClient) { }

  getPaisesEuropeos(): Promise<any[]> {
    return this.httpClient.get<any[]>('https://restcountries.eu/rest/v2/regionalbloc/pa').toPromise();
  }

}
