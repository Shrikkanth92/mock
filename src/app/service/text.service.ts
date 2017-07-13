import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import {TextFields} from '../model/textfields';

@Injectable()
export class TextService {

  constructor(private http: Http) { }

  saveTextFields(textField: TextFields){
  	let url = "http://localhost:8080/insert";
  	let headers = new Headers({
  		'Content-Type' : 'application/json'
  	});
  	return this.http.post(url, JSON.stringify(textField), { headers : headers});	
  }


}
