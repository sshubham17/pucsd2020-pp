





import { Component, OnInit } from '@angular/core';
//import {HelloComponent}  from '../hello/hello.component';
//import { HelloComponent } from '../hello/hello.component';
import {Http ,Response,Headers} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  constructor(private http :Http) { }
  public users=[];
public tbl=`<div style="position:fixed;
bottom:500px;
right:150px"><table style="width:100%"><thead><tr>
      <th border: 1px solid black;border-collapse: collapse;>Id</th>
     <th border: 1px solid black;border-collapse: collapse;>First_Name</th>
     <th border: 1px solid black;border-collapse: collapse;>Last_Name</th>
     <th border: 1px solid black;border-collapse: collapse;>Email_ID</th>
     <th border: 1px solid black;border-collapse: collapse;>Password</th>
     <th border: 1px solid black;border-collapse: collapse;>Contact_no</th></tr></thead><tbody></div>`;
onSubmit = function(){
  var id=((document.getElementById("txtid") as HTMLInputElement).value);
   console.log(id);
  this.http.get(`${"webapi/v1/user/"}${id}`).subscribe(data=>{this.users=data;
  //console.log(JSON.stringify(data));
  let temp="";
  console.log(data.json());
  data=data.json();
  console.log(typeof(data),typeof(data['data']));
  console.log(data['data'],data);
  for(let i in data['data'])
  {
    temp=temp+"<td border: 1px solid black;border-collapse: collapse;>"+data['data'][i]+"</td>";
  };
  temp=this.tbl+"<tr>"+temp+"</tr>"+"</tbody>"+"</table>";
  document.getElementById("output").innerHTML=temp;
  //console.log(temp);
}
)
}
/*
onSubmit = function(){
  var id=((document.getElementById("txtid") as HTMLInputElement).value);
  this.http.get(`${"webapi/v1/user/"}${id}`).subscribe(data=>{this.users=data.json();
  //console.log(JSON.stringify(data));
  let temp="";
  console.log(data.json());
  data=data.json();
  //console.log(typeof(data),typeof(data['data']));
  //console.log(data['data'],"data ast",data);
  for(let i in data['data'])
  {
    temp=temp+"<td>"+data['data'][i]+"</td>";
  };
  //temp=this.tbl+"<tr>"+temp+"</tr>"+"</tbody>"+"</table>";
  //document.getElementById("output").innerHTML=temp;
  //console.log(temp);
}
)
}*/
  ngOnInit(): void {
    //this.onSubmit();
  }

}
