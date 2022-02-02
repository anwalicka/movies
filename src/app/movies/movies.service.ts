import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IMovie } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url: string = '';
  constructor(
    private httpClient: HttpClient,
    ) { }

  getMovies(): Observable<IMovie[]> {
      return of([
        { id: 1, name: "Grantorino" },
        { id: 2, name: "Gwiezdne Wojny" },
        { id: 3, name: "Hobbit" },
        { id:  4, name: "Harry Potter" },
        { id: 5, name: "Jedz modl sie i kochaj" }
      ])
  }

  addMovie(name: string) {
    this.httpClient.post(this.url, { body: name });
  }

  deleteMovie(id: number) {
    this.httpClient.delete(this.url, { body: id });
  }

  editMovie(id: number, name: string) {
    this.httpClient.put(this.url, { body: id })
  }

}
