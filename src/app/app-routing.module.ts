import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './College/home/home.component';
import { AdmsnComponent } from './College/admsn/admsn.component';
import { DeptComponent } from './College/dept/dept.component';
import { StaffComponent } from './College/staff/staff.component';
import { LoginComponent } from './College/login/login.component';
import { StudComponent } from './College/stud/stud.component';
import { ErrorComponent } from './College/error/error.component';
import { AuthoGuard } from './autho.guard';
import { ParentComponent } from './DataCommunication/parent/parent.component';
import { CompAComponent } from './DataCommunication/comp-a/comp-a.component';
import { CompBComponent } from './DataCommunication/comp-b/comp-b.component';
import { Parent2Component } from './parent2/parent2.component';
import { PrimeNGComponent } from './Third-party Liabrary/prime-ng/prime-ng.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admsn",component:AdmsnComponent},
  {path:"dept",component:DeptComponent},
  {path:"stud/:id/:name",component:StudComponent, canActivate:[AuthoGuard]},
  {path:"staff/:id/:name",component:StaffComponent},
  {path:"login",component:LoginComponent},
  {path:"commu",component:ParentComponent},
  {path:"parent",component:Parent2Component},
  {path:"compA",component:CompAComponent},
  {path:"compB",component:CompBComponent},
  {path:"third-paty-lia",component:PrimeNGComponent},
  {path:'exam',loadChildren:()=>import('./exam/exam.module').then(mod=>mod.ExamModule)},
  {path:'palcements',loadChildren:()=>import('./placememnts/placememnts.module').then(mod=>mod.PlacememntsModule)},
  // {path:"**",component:ErrorComponent},;
  {path:"**",redirectTo:""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
