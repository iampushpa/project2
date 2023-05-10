import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-outer-child',
  templateUrl: './outer-child.component.html',
  styleUrls: ['./outer-child.component.css']
})
export class OuterChildComponent {
  @Input() dataFromParent2 : any;

  public outerChildData : any = "Test data from outer child";

  constructor(){
    console.log(this.dataFromParent2);
    
  }

  getAllMarksDetails(){
    return this.outerChildData;
  }

  ngOnInit(){
    console.log(this.dataFromParent2);
    
  }



}
