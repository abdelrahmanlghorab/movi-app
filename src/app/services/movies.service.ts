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
}
