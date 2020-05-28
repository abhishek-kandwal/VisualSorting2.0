import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sortingboard',
  templateUrl: './sortingboard.component.html',
  styleUrls: ['./sortingboard.component.css']
})
export class SortingboardComponent implements OnInit {
  bars = '<app-bars ></app-bars><app-bars ></app-bars><app-bars ></app-bars>'
    constructor() { }

  ngOnInit(): void {
  }

}
