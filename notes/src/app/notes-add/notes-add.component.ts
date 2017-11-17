import { Component, OnInit } from '@angular/core';
import { ServiceService } from './../service.service';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {

  quote = 'quote goes here';

  constructor(private _serviceService: ServiceService) { }

  ngOnInit() {
  }

  onSubmit(){
    // this._serviceService.quotes.push(this.quote);
    console.log('in onSubmit()')
    this._serviceService.saveQuote(this.quote);
    this.quote = 'quote goes here';
  }
}
