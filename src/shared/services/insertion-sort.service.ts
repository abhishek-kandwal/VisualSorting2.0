import { Injectable } from '@angular/core';
import { CreateGraphService } from './create-graph.service';

@Injectable({
  providedIn: 'root'
})
export class InsertionSortService {

  constructor(private createGraphService : CreateGraphService) { }

  doSort(graphValue: any){
      for (let i = 0; i < graphValue.length; i++) {
        let j = i;
        while ((j > 0) && (graphValue[j] < graphValue[j - 1])) {
          
          let swapvalue = graphValue[j];
          graphValue[j] = graphValue[j - 1];
          graphValue[j - 1] = swapvalue
          j--;

          setTimeout( () => {
            this.createGraphService.setGraph(graphValue);
          }, i * 1000);
        }
      }
  }
}
