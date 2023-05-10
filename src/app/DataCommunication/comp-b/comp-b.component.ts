import { Component } from '@angular/core';
import { InterCommuService } from 'src/app/Services/inter-commu.service';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
  public dataFromA : any;
  public dataFromB : any = "This is data from B component";

  constructor(private ics : InterCommuService){
    // this.ics.currentMessage.subscribe(
    //   ((res:any)=>{
    //     console.log(res);
    //   })
    // )

    this.ics.getData().subscribe(
      ((res:any)=>{
        console.log(res);
        this.dataFromA = res;
      })
    )

  }

  SetMessageFromB(){
    this.ics.setData(this.dataFromB);
  }

}
