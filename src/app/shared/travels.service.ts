import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  constructor(private firebase: AngularFireDatabase) { }
  taskList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    taskName: new FormControl('', Validators.required),
    startDate: new FormControl('', Validators.required),
    endDate:  new FormControl('', Validators.required),
  });

  getTravels() {
    this.taskList = this.firebase.list('tasks');
    return this.taskList.snapshotChanges();
  }
  insertTravel(task) {
    this.taskList.push({
      taskName: task.taskName,
      startDate: task.startDate,
      endDate: task.endDate,
    });
  }

  populateForm(task) {
    this.form.setValue(task);
  }
  updateTravel(task) {
    this.taskList.update(task.$key, {
      taskName: task.taskName,
      startDate: task.startDate,
      endDate: task.endDate,
    });
  }
  deleteTravel($key: string){
    this.taskList.remove($key);
  }
}

