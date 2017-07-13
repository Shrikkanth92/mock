import { Component, OnInit } from '@angular/core';
import {TextFields} from '../../model/textfields';
import {Router, NavigationExtras} from "@angular/router";
import {TextService} from '../../service/text.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

	private field1 : String;
	private field2 : String;
	private textField : TextFields = new TextFields();


  constructor(
  	private router:Router,
  	private textService: TextService) { }

  ngOnInit() {
  }

  onCancel(){
  		this.field1 = "";
  		this.field2 = "";
  }

  onSubmit(){
  		this.textField.field1 = this.field1;
  		this.textField.field2 = this.field2;
  		this.textService.saveTextFields(this.textField).subscribe(
  			res => {
  				console.log(res.text());
  				let navigationExtras: NavigationExtras = {
           		 queryParams: {
                "textfield": JSON.stringify(this.textField)
           		}
        	};
  				this.router.navigate(['/result'], navigationExtras);
  		},
  		err => {
  			console.log(err.text());
  		});
  }
}
