import { Component, OnInit } from '@angular/core';
//import {NgModule} from '@angular/core';





import { HttpClient, HttpHeaders } from '@angular/common/http';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/add/operator/toPromise';
import {Http ,Response,Headers} from '@angular/http';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor(private http :Http) { }

  //id:number;
  //private headers=new Headers({'Content-Type':'application/json'});
   //Url: 'http://localhost:5556/products';
  users : any = [];
  fetchData = function(){
    this.http.get("webapi/v1/user").subscribe(
    res=>
    {this.users=res["data"];
    console.log("Response",res);
    console.log(this.users)}
  )
}

  ngOnInit(): void {
    this.fetchData();
  }

}
