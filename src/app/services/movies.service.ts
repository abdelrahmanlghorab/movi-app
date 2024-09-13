import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) {

   }
   getMovies() {
     return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=b6d1b0c65bcc889f545646a926fb22b9');
   }
    private movies: any[] = [];
    private hovered: any[] = [];

   addToWatchListArray(data: any) {
    this.movies.push(data);
    this.hovered.push({
      id:data.id,
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
    const index = this.hovered.findIndex(movie => movie.id === data.id);
    if (index !== -1) {
      this.hovered.splice(index, 1);
    }
   }
   gethoverdmovie(id: number) {
    return this.hovered.find(movie => movie.id === id);
   }
}
