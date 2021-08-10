import { Component, OnInit, Input } from '@angular/core';
import { HttpClientService, Movie } from '../service/http-client.service';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movies: Movie[];
  movieSearched: Movie[]; 
  @Input() query : String;
  count: number

  constructor(
      private httpClientService: HttpClientService
  ) {
  }

  ngOnInit(): void {
    this.httpClientService.getMovies().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
    this.count = 1; 
  }

  movie(): void {
       
    console.log("Movie is being searched" )
    this.httpClientService.getMovie(this.query).subscribe(
      response => this.handleSuccessfulMovie(response)
    );
  }
  
  incrCount(): void {
    this.count = this.count + 1
  }

  handleSuccessfulMovie(response) {
    console.log("response is " + response)
    this.movieSearched = response; 
  }

  handleSuccessfulResponse(response) {
      this.movies = response;
  }
}
