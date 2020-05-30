import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CreateGraphService } from '../../shared/services/create-graph.service';
import { SetgraphService } from '../../shared/services/setgraph.service';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-sortingboard',
  templateUrl: './sortingboard.component.html',
  styleUrls: ['./sortingboard.component.css']
})
export class SortingboardComponent implements AfterViewInit {

  rectvalx1 = 0;
  rectvaly1 = 0;
  rectvalx2 = 20;
  rectvaly2 = 100;


  graphvalues = [];
  constructor(
    private creategraphservice: CreateGraphService,
    private setgraphService: SetgraphService) { }

  // ngOnInit(){
  //   this.creategraphservice.getGraph().subscribe( result => {
  //     if(result){
  //       this.clearBars();
  //       this.graphvalues = result;
  //       this.createBars();
  //     } else {
  //       this.clearBars();
  //     }
  //   });
  // }


  ngAfterViewInit(): void {

    this.setgraphService.getSortedGraph().subscribe(result => {
      if (result) {
        for (let i = 1; i < result.length; i++) {
          setTimeout(() => {
            this.clearBars();
            let graphvalues = result[i-1];
            this.createBars(graphvalues);
          }, i * 10);
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

  createBars(graphval?:any) {
    var left = 137;
    // let i = 1;
    if(graphval){
      graphval.map(value => {
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
