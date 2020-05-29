import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sortingboard',
  templateUrl: './sortingboard.component.html',
  styleUrls: ['./sortingboard.component.css']
})
export class SortingboardComponent implements AfterViewInit {
  bars = '<app-bars ></app-bars><app-bars ></app-bars><app-bars ></app-bars>'
  array = [24,100,344,253,500];
  constructor() { }

  ngAfterViewInit(): void {
    this.createBars()
  }

  createBars(){
    var child;
    var left = 137;
    this.array.map( value => {
      child = document.createElement('div');
      child.id = 'bars';                             // id
      child.className = 'bars'                       // class name
      child.style.width= '3px';                     // width
      child.style.height= `${value}px`;                    // height
      child.style.backgroundColor= 'red';            // background color
      child.style.display = 'block';                 // display
      child.style.marginLeft = '5px';                // margin left
      child.style.float = 'left';                    // float
      child.style.position = 'absolute';             // position
      child.style.left = `${left=left+5}px`;                    // left
      child.style.bottom = '51px';                   // bottom
      document.getElementById('sortingboard').appendChild(child);
    });
    // var child = document.createElement('div');
    // child.id = 'bars';                             // id
    // child.className = 'bars'                       // class name
    // child.style.width= '3px';                     // width
    // child.style.height= '137px';                    // height
    // child.style.backgroundColor= 'red';            // background color
    // child.style.display = 'block';                 // display
    // child.style.marginLeft = '5px';                // margin left
    // child.style.float = 'left';                    // float
    // child.style.position = 'absolute';             // position
    // child.style.left = '137px';                    // left
    // child.style.bottom = '51px';                   // bottom
    // document.getElementById('sortingboard').appendChild(child);
   
  }

}
