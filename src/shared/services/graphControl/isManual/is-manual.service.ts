import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IsManualService {

  constructor() { }

  private $isManual = new BehaviorSubject<boolean>(false);

  setIsManual(isManualValue){
    this.$isManual.next(isManualValue);
  }

  getIsManual(){
    return this.$isManual.asObservable();
  }
}
