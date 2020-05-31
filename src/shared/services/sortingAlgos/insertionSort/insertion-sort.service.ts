import { Injectable } from '@angular/core';
import { CreateGraphService } from '../../graphControl/createGraph/create-graph.service';
import { SetgraphService } from '../../graphControl/setGraph/setgraph.service';

@Injectable({
  providedIn: 'root'
})
export class InsertionSortService {
  
  sortedArray: any = [];
  selectedNodes:any = [];

  constructor(private setgraphService : SetgraphService) { }

  doSort(graphValue: any){
      for (let i = 0; i < graphValue.length; i++) {
        let j = i;
        while ((j > 0) && (graphValue[j] < graphValue[j - 1])) {
                 
          let swapvalue = graphValue[j];
          graphValue[j] = graphValue[j - 1];
          graphValue[j - 1] = swapvalue
          
          this.selectedNodes.push([graphValue[j-1], graphValue[j]]);
          j--;
          this.sortedArray.push([...graphValue]);

          
        }
      }
      this.setnewgraph(this.selectedNodes , this.sortedArray);
  }

  setnewgraph( selectedNodes:any , graphValue:any ){
      this.setgraphService.setselectedNodes(selectedNodes);
      this.setgraphService.setSortedGraph(graphValue);
  }
}
