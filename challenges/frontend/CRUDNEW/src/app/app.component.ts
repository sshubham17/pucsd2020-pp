import { Component } from '@angular/core';
//import {router} from '@angular/router';




import {Http,Response,Headers} from '@angular/http';



/*constructor (private router:Router)
{}
onNavigate(create:string){router.navigate(create)}*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRUDNEW';
}
