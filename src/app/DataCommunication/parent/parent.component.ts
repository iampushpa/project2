import { Component, ViewChild } from '@angular/core';
import { OuterChildComponent } from '../outer-child/outer-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public parentData : any;
  public parentData2 : any;

  public childData : any;

  @ViewChild(OuterChildComponent) childCmp : any;


  constructor(){
    this.parentData = "Data from parent component to inner-child";
    this.parentData2 = "Data from parent component to outer-child";

    console.log(this.childCmp);
  }

  ngOnInit(){
    console.log(this.childCmp);
  }

  ngAfterViewInit(){
    console.log(this.childCmp);
    console.log(this.childCmp.outerChildData);
    console.log(this.childCmp.getAllMarksDetails());
  }

  fetchDatafromChild(evt : any){
    console.log("evt");
    this.childData = evt;
  }

}
