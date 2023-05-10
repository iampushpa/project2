import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgExamComponent } from './ug-exam/ug-exam.component';
import { PgExamComponent } from './pg-exam/pg-exam.component';
import { HomeExamComponent } from './home-exam/home-exam.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { InstructionsExamComponent } from './instructions-exam/instructions-exam.component';


const routes : Routes = [
  {path:'',component:HomeExamComponent},
  {path:'ug-exm',component:UgExamComponent},
  {path:'pg-exm',component:PgExamComponent},
  {path:'instr-exm',component:InstructionsExamComponent}

]

@NgModule({
  declarations: [
    UgExamComponent,
    PgExamComponent,
    HomeExamComponent,
    InstructionsExamComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class ExamModule { }
