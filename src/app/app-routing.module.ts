import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "list",
    component: ReservationListComponent
  },
  {
    path: "new",
    component: ReservationFormComponent
  },  
  {
    path: "edit/:id",
    component: ReservationFormComponent
  },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
