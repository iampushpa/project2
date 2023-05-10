import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inner-child',
  templateUrl: './inner-child.component.html',
  styleUrls: ['./inner-child.component.css']
})
export class InnerChildComponent {
  @Input() dataFromParent : any;
  @Output() dataEvent = new EventEmitter<any>();

  public dataFromChild : any = "this is the data from child to parent";

  constructor(){
    console.log(this.dataFromParent);
    
  }

  ngOnInit(){
    console.log(this.dataFromParent);
    
  }

  SendFromChildtoParent(){
    console.log("Hello");
    this.dataEvent.emit(this.dataFromChild);
    
  }

}
