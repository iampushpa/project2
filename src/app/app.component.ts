import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';


  public isShow : boolean = true;
  public navigateStud : boolean = false;

  constructor(private route:Router){}





  onClickOfAdmsn(){
    console.log("this is component.ts");
    if(this.isShow == true){
      // this.route.navigate(['admsn']);
      this.route.navigateByUrl('admsn');
    }
  }

  onClickOfStud(){
    this.navigateStud = true;
    this.route.navigate(['stud/1/Pushpa']);
    
  }
}
