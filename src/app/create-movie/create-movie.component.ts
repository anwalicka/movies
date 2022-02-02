import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {

  name: FormControl = new FormControl();
  added: boolean = false;
  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.name.valueChanges.subscribe(c => console.log(c))
  }

  addNew(){
    this.moviesService.addMovie(this.name.value);
    this.added = true;
  }

}
