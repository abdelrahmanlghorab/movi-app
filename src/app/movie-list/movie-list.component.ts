import { Component, inject, Input } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { RouterLink } from '@angular/router';
import {  NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from "../search/search.component";
import { WatchListService } from '../services/watch-list.service';
import Movie from '../interface';

import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { MovieListPaginationComponent } from '../movie-list-pagination/movie-list-pagination.component';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [FontAwesomeModule, MovieCardComponent, RouterLink, SearchComponent,MovieListPaginationComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  currentPage: number = 1;
  total_pages: number=1;
  pageSize: number = 20;



  starConfig: any;
  watchList:any[]=[];
  watchListservice= inject(WatchListService);
  @Input() rating: number = 0;

  moviesList: Movie[]=[];
  constructor(private movieService: MoviesService) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data: any) => (this.moviesList = data.results));
    this.watchList = this.watchListservice.getWatchList();
    this.movieService.getMovies().subscribe((data:any) => (this.moviesList = data.results))
    this.movieService.getMovies()
      .subscribe((data:any) => (this.moviesList = data.results))
  }
  reciveFromChild(id: number) {
    console.log('FROM PARENT', id);
  }
  onPageChange(page: number): void {
    this.currentPage = page;
    this.movieService.getMovies()

  }

}
