import { Component, ViewChild } from '@angular/core';
import { OuterChild2Component } from '../outer-child2/outer-child2.component';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component {
  @ViewChild(OuterChild2Component) childComponent : any;

  constructor(){
    console.log(this.childComponent);
  }

  ngOnInit(){
    console.log(this.childComponent);
  }

  

  ngAfterViewInit(){
    console.log(this.childComponent);
    console.log(this.childComponent.OCData1);
    console.log(this.childComponent.getAllDetails());

  }

}
