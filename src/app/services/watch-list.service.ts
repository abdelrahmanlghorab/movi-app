import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class WatchListService {
  private watchList: any[] = [
    {
      id: 1,
      title: 'Item 1',
      price: 10,
      description: 'Description 1',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 2,
      title: 'Item 2',
      price: 20,
      description: 'Description 2',
      image: 'https://picsum.photos/200/300'
    },
    {
      id: 3,
      title: 'Item 3',
      price: 30,
      description: 'Description 3',
      image: 'https://picsum.photos/200/300'
    }
  ];
  counter:number = 0;
  constructor(private counterService: CounterService) { }
  ngOnInit(){
    this.counterService.getCounter().subscribe(counter => {
      this.counter = counter;
    });
  }
  getWatchList(){
    return this.watchList;
  }
  addToWatchList(item: any){
    if(!this.watchList.includes(item)){
      this.watchList.push(item);
      this.counterService.increaseCounter();
    }
  }
  removeFromWatchList(item: any){
    const index = this.watchList.indexOf(item);
    if(index !== -1){
      this.watchList.splice(index, 1);
      this.counterService.decreaseCounter();
    }
  }
}
