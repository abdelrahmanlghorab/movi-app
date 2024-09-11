import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShopify } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.css'
})
export class WatchListComponent {
    faShopify = faShopify;
    faHeart = faHeart;
}
