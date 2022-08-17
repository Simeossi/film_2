import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMoviesComponent } from './components/add-movies/add-movies.component';
import { MovieHomeComponent } from './components/movie-home/movie-home.component';


const routes: Routes = [
  { path: "", component: MovieHomeComponent},
  { path: "addMovie", component: AddMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
