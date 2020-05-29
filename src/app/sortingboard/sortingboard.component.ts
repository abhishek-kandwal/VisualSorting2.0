import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CreateGraphService } from '../../shared/services/create-graph.service';

@Component({
  selector: 'app-sortingboard',
  templateUrl: './sortingboard.component.html',
  styleUrls: ['./sortingboard.component.css']
})
export class SortingboardComponent implements AfterViewInit {

  graphvalues = [];
  constructor(private creategraphservice: CreateGraphService) { }

  // ngOnInit(){
  //   this.creategraphservice.getGraph().subscribe( result => {
  //     if(result){
  //       this.clearBars();
  //       this.graphvalues = result;
  //       this.createBars();
  //     } else {
  //       this.clearBars();
  //     }
  //   });
  // }


  ngAfterViewInit(): void {
    this.creategraphservice.getGraph().subscribe(result => {
      if (result) {
        this.clearBars();
        this.graphvalues = result;
        this.createBars();
      } else {
        this.clearBars();
      }
    });
  }

  createBars() {
    var left = 137;
    this.graphvalues.map(value => {
      let child = document.createElement('div');
      child.id = 'bars';                             // id
      child.className = 'bars'                       // class name
      child.style.width = '3px';                     // width
      child.style.height = `${value}px`;                    // height
      child.style.backgroundColor = 'red';            // background color
      child.style.display = 'block';                 // display
      child.style.marginLeft = '5px';                // margin left
      child.style.float = 'left';                    // float
      child.style.position = 'absolute';             // position
      child.style.left = `${left = left + 5}px`;                    // left
      child.style.bottom = '51px';                   // bottom
      document.getElementById('playboard').appendChild(child);
    });
  }

  clearBars() {
    //document.getElementById("playboard").remove();

    console.log('clear');
    var item = document.getElementById("playboard");
    item.parentNode.removeChild(item);


  }

}
