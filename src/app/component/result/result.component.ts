import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import {TextFields} from '../../model/textfields';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	private textfield: TextFields = new TextFields();
	private field1: String;
	private field2: String

  constructor(
  	private route: ActivatedRoute,
  	private router: Router) { }

  ngOnInit() {
  	  	this.route.queryParams.subscribe(params => {
  		this.textfield = JSON.parse(params['textfield']);
  		
  	});
  	  	this.field1 = this.textfield.field1;
  	  	this.field2 = this.textfield.field2;
  }

}
