import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CreateGraphService } from '../../../shared/services/graphControl/createGraph/create-graph.service';
import { InsertionSortService } from '../../../shared/services/sortingAlgos/insertionSort/insertion-sort.service';
import { IsManualService } from '../../../shared/services/graphControl/isManual/is-manual.service';

@Component({
  selector: 'app-footer-console',
  templateUrl: './footer-console.component.html',
  styleUrls: ['./footer-console.component.css']
})
export class FooterConsoleComponent implements OnInit {
  
  isManual:boolean = false;
  Algos = [
    {value: 'Insertion', viewValue: 'Inserton Sort'},
    {value: 'Quick', viewValue: 'Quick Sort'},
    {value: 'Bubble', viewValue: 'Bubble Sort'}
  ];

  ManualForm = new FormGroup({
    algo: new FormControl(''),
    Speed: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(
    private createGraphservice : CreateGraphService,
    private insertionSortService : InsertionSortService,
    private isManualService: IsManualService
    ) { }

  ngOnInit(): void {
    this.isManualService.getIsManual().subscribe( result => {
      this.isManual = result;
    })
  }
  
  onSubmit() {
    console.warn(this.ManualForm.value);
  }

  CreateGraph(){
    this.createGraphservice.generateGraph();
  }

  clearGraph(){
    this.createGraphservice.clearGraph();
  }


}
