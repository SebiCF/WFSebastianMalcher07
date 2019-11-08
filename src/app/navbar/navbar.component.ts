import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private projectName: string;
  constructor() {
  this.projectName = "To-Do-List";
}


  ngOnInit() {
  }
  

}
