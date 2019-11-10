import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private firebase: AngularFireDatabase) { }
  
  travelList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    destination: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate:  new FormControl('', Validators.required),
    rating:  new FormControl('', Validators.required),
  });

  getTravels() {
    this.travelList = this.firebase.list('travels');
    return this.travelList.snapshotChanges();
  }
  insertTravel(dest) {
    this.travelList.push({
      destination: dest.destination,
      startDate: dest.startDate,
      endDate: dest.endDate,
      rating: dest.rating,
    });
  }
  populateForm(dest) {
    this.form.setValue(dest);
  }
  updateTravel(dest) {
    this.travelList.update(dest.$key, {
      destination: dest.destination,
      startDate: dest.startDate,
      endDate: dest.endDate,
      rating: dest.rating,
    });
  }
  deleteTravel($key: string){
    this.travelList.remove($key);
  }
}

