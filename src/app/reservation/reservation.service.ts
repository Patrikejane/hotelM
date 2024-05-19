import { Injectable } from '@angular/core';
import { Reservation } from '../model/reservation';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() {

    let savedReservation = localStorage.getItem("reservations");
    this.reservations = savedReservation? JSON.parse(savedReservation) : [];

   }

  private reservations : Reservation[] = [];


  //C R U D
  getReservations(): Reservation [] {
    return this.reservations;
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
    console.log(this.reservations);
  }

  addReservation(reservation:Reservation) : void{
    reservation.id = Date.now().toString();
    this.reservations.push(reservation);
    console.log(this.reservations);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }

  deleteReservation(id: string): void{
    let index = this.reservations.findIndex(res => res.id === id); 
    this.reservations.splice(index,1);
    console.log(this.reservations);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }


  updateReservation(id: string,updatedReservation:Reservation): void {
    let index = this.reservations.findIndex(res => res.id === id); 
    this.reservations[index] = updatedReservation;
    console.log(this.reservations);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }



}
