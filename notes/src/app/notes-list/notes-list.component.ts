import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  quotes = [];

  constructor(private _serviceService: ServiceService) {
    
  }

  ngOnInit() {
    this._serviceService.getQuotes(
      (response) => {this.quotes = response.reverse()}
    )
  }

}
