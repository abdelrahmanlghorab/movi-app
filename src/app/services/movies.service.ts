import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from '../interface';


@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) {

   }

  getPaginatedData(page: number, pageSize: number): Observable<Movie>{
    return this.http.get<Movie>(`/https://api.themoviedb.org/3/movie/popular?api_key=b6d1b0c65bcc889f545646a926fb22b9&page=${page}`);
  }
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>('https://api.themoviedb.org/3/movie/now_playing?api_key=b6d1b0c65bcc889f545646a926fb22b9');
   }
    private movies: Movie[] = [];
    private hovered: any[] = [];

   addToWatchListArray(data: Movie) {
    this.movies.push(data);
    this.hovered.push({
      id:data.results,
      hover:true
    });
   }
   getMovie() {
    return this.movies;
   }
   getHovered() {
    return this.hovered;
   }
   setHovered(data: any) {
    this.hovered.push({
      id:data.id,
      hover:true
    });
   }
   removeHovered(data: any) {
    this.hovered = this.hovered.filter(movie => movie.id !== data.id);
   }
   gethoverdmovie(id: number) {
    return this.hovered.find(movie => movie.id === id);
   }
}
