import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetgraphService {

  constructor() { }

  private $graphvalues = new BehaviorSubject<any>([]);
  private $selectedNodes = new BehaviorSubject<any>([]);

  setSortedGraph(sortedGraph: any){
    this.$graphvalues.next(sortedGraph);
  }
  
  getSortedGraph(){
    return this.$graphvalues.asObservable();
  }

  setselectedNodes(selectedNodes:any){
    this.$selectedNodes.next(selectedNodes);
  }

  getselectedNodes(){
    return this.$selectedNodes.asObservable();
  }
}
