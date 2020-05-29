import { Component, OnInit } from '@angular/core';
import { CreateGraphService } from '../../shared/services/create-graph.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})

export class ControllerComponent implements OnInit {

  constructor( private createGraphservice : CreateGraphService) { }

  ngOnInit(): void {
  }

  CreateGraph(){
    this.createGraphservice.generateGraph();
  }

  clearGraph(){
    this.createGraphservice.clearGraph();
  }

}
