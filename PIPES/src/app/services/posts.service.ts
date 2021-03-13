import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Promise<any[]>{
    return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').toPromise();
  }

}
