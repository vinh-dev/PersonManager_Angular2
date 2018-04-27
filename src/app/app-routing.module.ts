import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { CommonModule } from '@angular/common';
import { ListPersonComponent } from "./list-person/list-person.component";
import { PersonDetailComponent } from "./person-detail/person-detail.component";
import { DxLstpersonComponent } from "./dx-lstperson/dx-lstperson.component";
const routes: Routes = [
  // default is dashbroard
  {
   path: '',
   redirectTo: '/lst-person',
   pathMatch: 'full'
 },
 {
   path: 'lst-person',
   component: ListPersonComponent
 },
 {
   path: 'dx-lstperson',
   component: DxLstpersonComponent
 },
 {
   path: 'detail/:id',
   component: PersonDetailComponent
 },

];

@NgModule({
 exports: [RouterModule],

 imports: [RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }
