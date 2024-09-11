import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
    movieService= inject(MoviesService)
  isHoverd: boolean = false;


@Input() movieData:any;
@Output() sendToParent = new EventEmitter<number>();
constructor(private router:Router){}
  navigateToDetails(id: number) {
    this.sendToParent.emit(id);
    this.router.navigate([`/movie-details/${id}`]);
}
addToWatchList(movie:any){
    this.movieService.addToWatchListArray(movie);
    // console.warn(x);
   }

  hoverd() {
    this.isHoverd = !this.isHoverd
  }
}
