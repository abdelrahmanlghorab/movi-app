import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  constructor(private http: HttpClient) { }
  getMovieDetails(id : string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b6d1b0c65bcc889f545646a926fb22b9`)
  }
  getMovieRecomandation(id : string) {
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=b6d1b0c65bcc889f545646a926fb22b9`)
  }
}