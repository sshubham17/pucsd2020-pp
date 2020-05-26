import { Component, OnInit } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private http:Http) { }
  createObj : object={};
  addNewRecord = function(create){
    this.createObj={
      "first_name":create.first_name,
      "last_name":create.last_name,
      "email":create.email,
      "password":create.password,
      "contact_number":create.contact_number
    }
    this.http.post("/webapi/v1/user",this.createObj).subscribe(res=>{console.log(res);}
  )}

  ngOnInit(): void {
  }

}
