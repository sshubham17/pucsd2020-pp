import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http ,Response,Headers} from '@angular/http';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private http :Http) { }
  //id:number;
  private headers=new Headers({'Content-Type':'application/json'});

  users:any=[];
  onSubmit = function(id : string){
    if(confirm("Are You sure?"))
    {
    this.http.delete(`${"/webapi/v1/user/"}${id}`).subscribe(
    (data: {})=>
    {this.users=data;
    console.log(data)}
  )}
  }
  ngOnInit(): void {
  }

}
