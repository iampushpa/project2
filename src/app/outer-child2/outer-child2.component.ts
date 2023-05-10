import { Component } from '@angular/core';

@Component({
  selector: 'app-outer-child2',
  templateUrl: './outer-child2.component.html',
  styleUrls: ['./outer-child2.component.css']
})
export class OuterChild2Component {

  public OCData1 : any = "data from outer child";

  getAllDetails(){
    return this.OCData1;
  }

}
