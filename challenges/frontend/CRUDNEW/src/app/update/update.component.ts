import { Component, OnInit } from '@angular/core';
import {Http ,Response,Headers} from '@angular/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private http :Http) { }
  updateObj : object={};
  updateUserRecord = function(update){
    this.updateObj={
      "id" : update.id,
      "first_name":update.first_name,
      "last_name":update.last_name,
      "email":update.email,
      "password":update.password,
      "contact_number":update.contact_number
    }
    this.http.put(`${"webapi/v1/user/"}${update.id}`,this.updateObj,JSON.stringify(this.updateObj)).subscribe(res=>{console.log(res);}
  )}
  ngOnInit(): void {
  }

}
