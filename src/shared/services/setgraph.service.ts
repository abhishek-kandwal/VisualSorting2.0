import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetgraphService {

  constructor() { }

  private $graphvalues = new BehaviorSubject<any>([]);

  setSortedGraph(sortedGraph: any){
    this.$graphvalues.next(sortedGraph);
  }
  
  getSortedGraph(){
    return this.$graphvalues.asObservable();
  }
}
