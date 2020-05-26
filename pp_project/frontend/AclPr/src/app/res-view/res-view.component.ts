






import { Component, OnInit } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-res-view',
  templateUrl: './res-view.component.html',
  styleUrls: ['./res-view.component.css']
})
export class ResViewComponent implements OnInit {

  constructor(private http:Http,private router:Router) { }

  resource:any=[];
  a:any=[];
  //b:3;
  fetchData=function()
  {
    this.http.get("/webapi/v1/fileserver").subscribe((data)=>{
       var array=data.json();
       var arr=array["data"];
       console.log(arr);
       if(this.a[2]==1)
       {
          for(var i=0;i<arr.length;i++)
          {
              var obj={
              "id":arr[i][0],
              "file_name":arr[i][1],
              "owner_name":arr[i][2],
              "perm_type":3
              }
              this.resource.push(obj);
          }
       }
       else
       {
          this.http.get("/webapi/v1/userfilepermission").subscribe((data1)=>
          {
              var src=data1.json();
              var list=src["data"];
              console.log(list);
              var cnt=0;
              for(var j=0;j<list.length;j++)
              {
                  if(this.a[1]==list[j][1])
                  {
                      //console.log("Hello");
                      for(var k=0;k<arr.length;k++)
                      {
                          if(list[j][2]==arr[k][0])
                          {
                              console.log("Hello");
                              var obj=
                              {
                                  "id":arr[k][0],
                                  "file_name":arr[k][1],
                                  "owner_name":arr[k][2],
                                  "perm_type":list[j][4],
                              }
                              this.resource.push(obj);
                              cnt=cnt+1;
                          }
                      }
                  }
              }
              if(cnt==0)
              {
                  alert("user dont have any permission to open file");
                  return false;
              }
          })
       }
    })
  }


  textValue:string;
  groupObj:object={};
  parsing:string;
  type:number;
  OpenFile=function(file_name,perm_type)
  {
      this.groupObj=
  {
    "file_path":file_name
  }
   this.parsing=file_name;
   this.type=parseInt(perm_type);
  console.log(this.parsing);
  this.http.post("/webapi/v1/getfiledata",this.groupObj).subscribe(
    (data)=>{
      var array=data.json();
      var arr=array["data"];
      console.log(arr);
      this.textValue=arr
      // this.router.navigate(['/res-view']);
    }
  )
  }
  
    onSubmit=function()
    {
    if(this.type==3)
    {
     var a=this.parsing;
      console.log(a);
      this.obj=
      {
          "file_path":a,
          "owner_name":this.textValue
      }
      console.log(this.obj);
      this.http.post("/webapi/v1/writedatatofile",this.obj).subscribe(
    (data)=>{
          console.log(data);})
    }
      else
    { 
      alert("you don't have access to modify that file");
      return false;
      }
  }
  

  ngOnInit(): void {
    this.fetchData(); 
    this.a=JSON.parse(localStorage.getItem("info"));
    //console.log(this.a);
    }

}
