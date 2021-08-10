import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export class Movie {
  constructor(
    public id: string,
    public movieName: string,
    public movieDescription: string,
    public movieDirector: string,
    public language: string,
    public actors:string[]
  ) {
  }
}

// This is a service class
@Injectable({
  providedIn: 'root'
})

export class HttpClientService{

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies(){
      return this.httpClient.get<Movie[]>('http://localhost:8080/movie/all');
  }

  getMovie(query: String){
    return this.httpClient.get<Movie[]>('http://localhost:8080/movie/search?query=' + query);
  }
}
