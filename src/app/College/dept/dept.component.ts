import { Component } from '@angular/core';
import { InterCommuService } from 'src/app/Services/inter-commu.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DeptComponent {
  public commomSharedData : any;

  constructor(private mySer : InterCommuService){
    this.mySer.getData().subscribe(
      ((res:any)=>{
        console.log(res);
        this.commomSharedData = res;
      })
    )
  }

}
