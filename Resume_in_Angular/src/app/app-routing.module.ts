







import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ObjectivesComponent } from './objectives/objectives.component';
import { EducationDetailsComponent } from './education-details/education-details.component'
//import { InternshipComponent } from './internship/internship.component';
import { ActivitiesComponent } from './activities/activities.component';

const routes: Routes = [
  {path :'PI' ,component:PersonalInfoComponent},
  {path:'Oj' ,component:ObjectivesComponent},
  {path:'edu' ,component:EducationDetailsComponent},
  //{path:'itrn' ,component:InternshipComponent},
  {path:'skill' ,component:ActivitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
