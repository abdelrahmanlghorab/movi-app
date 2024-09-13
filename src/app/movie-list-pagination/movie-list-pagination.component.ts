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

  // Method to navigate to the previous page
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  // Method to navigate to the next page
  goToNextPage(): void {
    if (this.currentPage < this.total_pages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  // Method to handle direct page selection
  goToPage(page: number): void {
    if (page >= 1 && page <= this.total_pages) {
      this.pageChange.emit(page);
    }
  }
  // Method to generate visible page numbers
  getVisiblePages(): number[] {
    let pages = [];
    const start = Math.max(1, this.currentPage - 2);
    const end = Math.min(this.total_pages, this.currentPage + 2);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

}
