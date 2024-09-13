import { Component, inject } from '@angular/core';
import { SearchService } from '../services/search.service';
import { SearchComponent } from "../search/search.component";
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { WatchListService } from '../services/watch-list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [SearchComponent, MovieCardComponent],
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  searchService = inject(SearchService);
  keyword: string = '';
  watchList: any[] = [];
  watchListService = inject(WatchListService);
  movieSearchResult: any;

  constructor(private router: Router) {}

  searchFn(key: string) {
    this.searchService.getSearchResult(key);
    this.router.navigate([`/search/${key}`]);
  }

  ngOnInit() {
    this.searchService.getSearchMovies().subscribe(res => {
      this.movieSearchResult = res;
      console.log(this.movieSearchResult);
    });
    this.keyword = this.searchService.getKey();
  }
}
