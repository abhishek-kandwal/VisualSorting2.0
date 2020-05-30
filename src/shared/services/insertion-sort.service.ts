import { Injectable } from '@angular/core';
import { CreateGraphService } from './create-graph.service';
import { SetgraphService } from './setgraph.service';

@Injectable({
  providedIn: 'root'
})
export class InsertionSortService {
  
  sortedArray: any = [];

  constructor(private setgraphService : SetgraphService) { }

  doSort(graphValue: any){
      for (let i = 0; i < graphValue.length; i++) {
        let j = i;
        while ((j > 0) && (graphValue[j] < graphValue[j - 1])) {
          
          // this.sortedArray.push([graphValue[j-1], graphValue[j]]);
          
          let swapvalue = graphValue[j];
          graphValue[j] = graphValue[j - 1];
          graphValue[j - 1] = swapvalue
          
          // this.sortedArray.push([graphValue[j-1], graphValue[j]]);

          j--;
          this.sortedArray.push([...graphValue]);

          
        }
      }
      this.setnewgraph(this.sortedArray);
  }

  setnewgraph( graphValue){
      this.setgraphService.setSortedGraph(graphValue);
  }
}
