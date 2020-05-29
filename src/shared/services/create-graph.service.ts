import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateGraphService {

  constructor() { }
  
  private $graphValues = new BehaviorSubject<any>([]);

  generateGraph(){
    let graphVal = [];
    for(let i = 0; i < 300 ; i++ ){
      let value = Math.floor(Math.random() * 100) * 10;
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

  setGraph(graphVal: any){
    this.$graphValues.next(graphVal);
  }
}
