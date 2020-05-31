import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { CreateGraphService } from '../../../shared/services/graphControl/createGraph/create-graph.service';
import { InsertionSortService } from '../../../shared/services/sortingAlgos/insertionSort/insertion-sort.service';
import { IsManualService } from '../../../shared/services/graphControl/isManual/is-manual.service';
import { ManualControlService } from '../../../shared/services/graphControl/manualControl/manualControl.service';

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
    ])
  });

  ManualFormBars = new FormGroup({
    Bars: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(
    private createGraphservice : CreateGraphService,
    private insertionSortService : InsertionSortService,
    private isManualService: IsManualService,
    private ManualControlService: ManualControlService
    ) { }

  ngOnInit(): void {
    this.isManualService.getIsManual().subscribe( result => {
      this.isManual = result;
    });
  }
  
  onSubmit() {
    this.doSort(this.ManualForm.value.algo, this.ManualForm.value.speed, this.ManualFormBars.value.Bars);
  }

  CreateGraph(){
    this.ManualControlService.setBarsManual(this.ManualFormBars.value.Bars);
      console.log(this.ManualFormBars.value.Bars);
    this.createGraphservice.generateGraph();
  }

  clearGraph(){
    this.createGraphservice.clearGraph();
  }

  doSort( algo: String , Speed: number , Bars: number){
    
    this.ManualControlService.setGraphManual(Speed);

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
