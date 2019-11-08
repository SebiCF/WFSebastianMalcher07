import { Component, OnInit } from '@angular/core';
import { TravelService } from '../shared/travels.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.scss']
 })
 export class TravelsListComponent implements OnInit {
  taskArray = [];
  showDeletedMessage: boolean;
  searchText = '';
  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.travelService.getTravels().subscribe(
            (list) => {
                    this.taskArray = list.map( (item) => {
                           return {
                                   $key : item.key,
                                   ...item.payload.val()
                           };
                   });
            });

}

onDelete($key) {
        if (confirm('Are you sure you want to delete this record?')) {
           this.travelService.deleteTravel($key);
           this.showDeletedMessage = true;
           setTimeout(() => this.showDeletedMessage = false , 3000);
          }
      }
      filterCondition(task) {
        return task.taskName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1 ||
                task.date.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
      }
 }
