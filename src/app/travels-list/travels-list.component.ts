import { Component, OnInit } from '@angular/core';
import { TravelService } from '../shared/travels.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.scss']
 })
 export class TravelsListComponent implements OnInit {
  travelArray = [];
  showDeletedMessage: boolean;
  searchText = '';
  constructor(private travelService: TravelService) { }

  ngOnInit() {
    this.travelService.getTravels().subscribe(
            (list) => {
                    this.travelArray = list.map( (item) => {
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
      filterCondition(dest) {
        return dest.destination.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1 ||
                dest.rating.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
      }
 }
