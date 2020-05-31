import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManualControlService {



  constructor() { }

  private $manualSetting = new BehaviorSubject<any>([]);
  private $bars = new BehaviorSubject<any>([]);


  setGraphManual(sortedGraph: any){
    this.$manualSetting.next(sortedGraph);
  }
  
  getGraphManual(){
    return this.$manualSetting.asObservable();
  }

  setBarsManual(Bars: any) {
    this.$bars.next(Bars);
  }

  getBarsManual(){
    return this.$bars.asObservable();
  }

}
