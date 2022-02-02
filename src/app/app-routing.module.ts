import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  { path: 'create-movie', component: CreateMovieComponent },
  { path: 'movie', component: MoviesComponent },
  { path: '',   redirectTo: '/movie', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
