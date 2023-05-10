import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgPlacementsComponent } from './ug-placements/ug-placements.component';
import { PgPlacementsComponent } from './pg-placements/pg-placements.component';
import { HomePlacementsComponent } from './home-placements/home-placements.component';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes = [
  {path:'',component:HomePlacementsComponent},
  {path:'ug-place',component:UgPlacementsComponent},
  {path:'pg-place',component:PgPlacementsComponent}
  
]

@NgModule({
  declarations: [
    UgPlacementsComponent,
    PgPlacementsComponent,
    HomePlacementsComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)]
  ]
})
export class PlacememntsModule { }
