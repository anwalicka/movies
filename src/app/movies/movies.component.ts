import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovie } from './movies.model';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movie$: Observable<IMovie[]> = of([]);
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.movie$ = this.moviesService.getMovies().pipe(map(x => x.data));
  }
}