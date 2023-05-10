import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './College/home/home.component';
import { DeptComponent } from './College/dept/dept.component';
import { AdmsnComponent } from './College/admsn/admsn.component';
import { StudComponent } from './College/stud/stud.component';
import { StaffComponent } from './College/staff/staff.component';
import { LoginComponent } from './College/login/login.component';
import { ErrorComponent } from './College/error/error.component';
import { ParentComponent } from './DataCommunication/parent/parent.component';
import { OuterChildComponent } from './DataCommunication/outer-child/outer-child.component';
import { InnerChildComponent } from './DataCommunication/parent/inner-child/inner-child.component';
import { CompAComponent } from './DataCommunication/comp-a/comp-a.component';
import { CompBComponent } from './DataCommunication/comp-b/comp-b.component';
import { Parent2Component } from './parent2/parent2.component';
import { OuterChild2Component } from './outer-child2/outer-child2.component';
import { PrimeNGComponent } from './Third-party Liabrary/prime-ng/prime-ng.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeptComponent,
    AdmsnComponent,
    StudComponent,
    StaffComponent,
    LoginComponent,
    ErrorComponent,
    ParentComponent,
    OuterChildComponent,
    InnerChildComponent,
    CompAComponent,
    CompBComponent,
    Parent2Component,
    OuterChild2Component,
    PrimeNGComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
