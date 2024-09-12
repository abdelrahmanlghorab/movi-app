import { Component, inject } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css'
})
export class SearchResultComponent {
SearchResult=inject(SearchService);
movieSearchResult:any;
ngOnInit() {
  this.movieSearchResult = this.SearchResult.getSearchMovies().subscribe(res => {
    this.movieSearchResult = res;});
}
}
