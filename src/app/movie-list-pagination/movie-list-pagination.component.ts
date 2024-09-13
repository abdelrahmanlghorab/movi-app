import { Component, Input, Output, EventEmitter ,NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-list-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-list-pagination.component.html',
  styleUrl: './movie-list-pagination.component.css'
})
export class MovieListPaginationComponent {

  @Input() currentPage: number = 1;   // Input for the current page
  @Input() total_pages: number = 1;     // Input for the total number of pages
  @Output() pageChange = new EventEmitter<number>();  // Output to emit page change event
CommonModule: any;

}
