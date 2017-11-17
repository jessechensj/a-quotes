import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; 
import 'rxjs'

@Injectable()
export class ServiceService {

  quotes = [];

  constructor(private _http: Http) {
  }

  saveQuote(quote){
    this._http.post(`/create`, {content: quote})
    .subscribe( 
      (data) => {
        console.log(data);
      }
    )
  }

  getQuotes(callback) {
    this._http.get(`/quotes`).subscribe( 
      (response) => { this.quotes = response.json(); callback(response.json());},
      (error) => {console.log(error)}
    )
  }

  fetch(){
    return this.quotes;
  }
}
