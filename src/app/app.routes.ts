import { Routes } from '@angular/router';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SearchComponent } from './search/search.component';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    {
        path: '',
        component: MovieListComponent,
        title: 'Movie Home'
    },
    {
        path:"search",
        component: SearchComponent,
        title: 'Movie Search'
    },
    {
        path:"watch-list",
        component: WatchListComponent,
        title: 'Movie Watch List'
    },
    {
        path:"movie-details",
        component: MovieDetailComponent,
        title: 'Movie Details'
    },
    {
        path: "**",
        component: NotfoundComponent,
        title: 'Not Found'
    }
];
