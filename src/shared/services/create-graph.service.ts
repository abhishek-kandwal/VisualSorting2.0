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
      let value = Math.random() * 1000;
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
