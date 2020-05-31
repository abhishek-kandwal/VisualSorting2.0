import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ManualControlService } from '../manualControl/manualControl.service';

@Injectable({
  providedIn: 'root'
})
export class CreateGraphService implements OnInit {

  noOfBars:number = 150;

  constructor(
    private manualControlService:ManualControlService
  ) { }

  ngOnInit(){
    this.manualControlService.getBarsManual().subscribe( result => {
      console.log(result);
      this.noOfBars = result;
    });
  }
  
  private $graphValues = new BehaviorSubject<any>([]);

  generateGraph(){
    let graphVal = [];
    for(let i = 0; i <  this.noOfBars ; i++ ){
      let value = Math.floor(Math.random() * 1000);
      if (value > 600){
        value = value - 550;
      }
      graphVal.push(value);
    }
    this.$graphValues.next(graphVal);
  }

  clearGraph(){
    this.$graphValues.next([]);
  }

  getGraph(){
    return this.$graphValues.asObservable();
  }

}
