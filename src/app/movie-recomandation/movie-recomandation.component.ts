import { Component } from '@angular/core';
import { MovieDetailService } from '../services/movie-detail.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';

@Component({
  selector: 'app-movie-recomandation',
  standalone: true,
  imports: [MovieDetailComponent],
  templateUrl: './movie-recomandation.component.html',
  styleUrl: './movie-recomandation.component.css'
})
export class MovieRecomandationComponent {
  moviereco : any;
  id :string= '';
  isHoverd: boolean = false;
  constructor(private movieRecomandationService: MovieDetailService,private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
 
  ngOnInit() {
    this.movieRecomandationService.getMovieRecomandation(this.id).subscribe((data: any) => {
      this.moviereco = data.results;
    });
  }
  hoverd() {
    this.isHoverd = !this.isHoverd
  }
}



