import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";


import { CommonModule } from '@angular/common';
import { ListPersonComponent } from "./list-person/list-person.component";
const routes: Routes = [
  // default is dashbroard
  {
   path: '',
   redirectTo: '/person',
   pathMatch: 'full'
 },
 {
   path: 'person',
   component: ListPersonComponent
 },
//  {
//    path: 'dashboard',
//    component: DashboardComponent
//  },
//  {
//    path: 'detail/:id',
//    component: HeroDetailComponent
//  },

];

@NgModule({
 exports: [RouterModule],

 imports: [RouterModule.forRoot(routes)],

})
export class AppRoutingModule { }
