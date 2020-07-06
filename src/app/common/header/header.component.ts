import { Component, OnInit } from '@angular/core';
import { IsManualService } from '../../../shared/services/graphControl/isManual/is-manual.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isManualVal: boolean = false;

  constructor(
      private isManualService: IsManualService
      ) { }

  ngOnInit(): void {
  }

  isManual(){
    this.isManualVal?this.isManualVal = false: this.isManualVal = true;
    this.isManualService.setIsManual(this.isManualVal);
  }
}
