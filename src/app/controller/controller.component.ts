import { Component, OnInit } from '@angular/core';
import { CreateGraphService } from '../../shared/services/graphControl/createGraph/create-graph.service';
import { InsertionSortService } from '../../shared/services/sortingAlgos/insertionSort/insertion-sort.service';
import { IsManualService } from '../../shared/services/graphControl/isManual/is-manual.service';
import { ManualControlService } from '../../shared/services/graphControl/manualControl/manualControl.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})

export class ControllerComponent implements OnInit {

  isAuto:boolean = true;
  constructor( private createGraphservice : CreateGraphService,
               private insertionSortService : InsertionSortService,
               private isManualService: IsManualService,
               private manualControlService: ManualControlService) { }

  ngOnInit(): void {
    this.isManualService.getIsManual().subscribe( result => this.isAuto = result);
  }

  CreateGraph(){
    this.manualControlService.setBarsManual(150);
    this.createGraphservice.generateGraph();
  }

  clearGraph(){
    this.createGraphservice.clearGraph();
  }

  doSort( algo: String){

    this.manualControlService.setGraphManual(10);
    
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
