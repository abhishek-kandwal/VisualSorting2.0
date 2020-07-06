import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CreateGraphService } from '../../shared/services/graphControl/createGraph/create-graph.service';
import { SetgraphService } from '../../shared/services/graphControl/setGraph/setgraph.service';
import { ManualControlService } from '../../shared/services/graphControl/manualControl/manualControl.service';

@Component({
  selector: 'app-sortingboard',
  templateUrl: './sortingboard.component.html',
  styleUrls: ['./sortingboard.component.css']
})
export class SortingboardComponent implements AfterViewInit {

  timer :number;
  graphvalues = [];
  selectedNodes = [];

  constructor(
    private creategraphservice: CreateGraphService,
    private setgraphService: SetgraphService,
    private ManualControlService: ManualControlService
    ) { }

  ngAfterViewInit(): void {


    this.setgraphService.getselectedNodes().subscribe(result => {
      if(result){
        this.selectedNodes = result;
      }
    });

    this.setgraphService.getSortedGraph().subscribe(result => {
      if (result) {

        this.ManualControlService.getGraphManual().subscribe( result => {
          this.timer = result;
        });
        let isGraphSorted = false;
        for (let i = 1; i < result.length+1; i++) {
          let graphvalues = result[i-1];
          let nodes = this.selectedNodes[i-1];
          setTimeout(() => {
            this.clearBars();
            (i == result.length)?isGraphSorted = true: 0;
            this.createBars(graphvalues , i-1 , nodes , isGraphSorted);
          }, i * this.timer );
        }
      }
    });

    this.creategraphservice.getGraph().subscribe(result => {
      if (result) {
        this.clearBars();
        this.graphvalues = result;
        this.createBars();
      } else {
        this.clearBars();
      }
    });
  }

  createBars(graphval?:any , i?:any , nodes?:any , isGraphSorted?:any) {
    var left = 137;
    if(graphval){
      let [bar1 , bar2] = nodes;
      graphval.map(value => {
      
      let bgColor = (value == bar1 || value == bar2)?'blue':'red';
          isGraphSorted?bgColor = 'green':0;
      let child = document.createElement('div');
      child.id = 'bars';                             // id
      child.className = 'bars'                       // class name
      child.style.width = '3px';                     // width
      child.style.height = `${value}px`;                    // height
      child.style.backgroundColor = bgColor;            // background color
      child.style.display = 'block';                 // display
      child.style.marginLeft = '5px';                // margin left
      child.style.float = 'left';                    // float
      child.style.position = 'absolute';             // position
      child.style.left = `${left = left + 5}px`;                    // left
      child.style.bottom = '51px';                   // bottom
      document.getElementById('playboard').appendChild(child);
    });
    }else{
    this.graphvalues.map(value => {
      let child = document.createElement('div');
      child.id = 'bars';                             // id
      child.className = 'bars'                       // class name
      child.style.width = '3px';                     // width
      child.style.height = `${value}px`;                    // height
      child.style.backgroundColor = 'red';            // background color
      child.style.display = 'block';                 // display
      child.style.marginLeft = '5px';                // margin left
      child.style.float = 'left';                    // float
      child.style.position = 'absolute';             // position
      child.style.left = `${left = left + 5}px`;                    // left
      child.style.bottom = '51px';                   // bottom
      document.getElementById('playboard').appendChild(child);
    });
  }
  }

  clearBars() {
    document.getElementById("playboard").innerHTML = '';
  }

}
