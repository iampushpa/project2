import { Component } from '@angular/core';
import { InterCommuService } from 'src/app/Services/inter-commu.service';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {
  public dataFromA : any= "This is data from A component";
  public dataFromB : any;

  constructor(private ics : InterCommuService){
    // this.ics.currentMessage.subscribe(
    //   ((res:any)=>{
    //     console.log(res);
    //   })
    // )

    this.ics.getData().subscribe(
      ((res:any)=>{
        console.log(res);
        this.dataFromB = res;
      })
    )

  }

  SetMessageFromA(){
    this.ics.setData(this.dataFromA);
  }

}
