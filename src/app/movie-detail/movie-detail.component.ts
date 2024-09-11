import { Component } from '@angular/core';
import { MovieDetailService } from '../services/movie-detail.service';
import { ActivatedRoute } from '@angular/router';
import { MovieRecomandationComponent } from "../movie-recomandation/movie-recomandation.component";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [MovieRecomandationComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  movies : any;
  id :string= '';
  constructor(private movieDetailService: MovieDetailService,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.movieDetailService.getMovieDetails(this.id).subscribe((data: any) => {
      this.movies = data;
    });
  }

}
