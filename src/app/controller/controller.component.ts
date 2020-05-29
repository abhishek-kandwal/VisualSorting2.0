import { Component, OnInit } from '@angular/core';
import { CreateGraphService } from '../../shared/services/create-graph.service';
import { InsertionSortService } from '../../shared/services/insertion-sort.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})

export class ControllerComponent implements OnInit {

  constructor( private createGraphservice : CreateGraphService,
               private insertionSortService : InsertionSortService) { }

  ngOnInit(): void {
  }

  CreateGraph(){
    this.createGraphservice.generateGraph();
  }

  clearGraph(){
    this.createGraphservice.clearGraph();
  }

  doSort( algo: String){
    if( algo == 'Insertion'){
        let graphValues;
        this.createGraphservice.getGraph().subscribe( val => {
          graphValues = val;
        });
        this.insertionSortService.doSort(graphValues);
    } else if ( algo == 'Quick'){
      console.log('quick');
    } else if ( algo == 'Bubble'){
      console.log('bubble');
    }
  }

}
