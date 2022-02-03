import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IMovie } from './movies.model';
import { IServiceResponse } from '../models/service.response.model';
import { MockService } from '../mocks/services/mock.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url: string = environment.movieApiEndpoint + '/movie';
  constructor(
    private httpClient: HttpClient, private mockDataService: MockService
  ) { }

  getMovies(): Observable<IServiceResponse<IMovie[]>> {
    if (environment.production) {
      return this.httpClient.get<IServiceResponse<IMovie[]>>(this.url);
    }
    else {
      return this.mockDataService.getMovies().pipe(map(x => <IServiceResponse<IMovie[]>>x));
    }
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